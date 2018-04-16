function calculate(query) {
    const operations = {
        '$'(a, b) {return a / b},
        '*'(a, b) {return a * b},
        '-'(a, b) {return a - b},
        '+'(a, b) {return a + b},
        '400'() {return '400: Bad request'},
    };
    const orderOperations = ['$', '*', '-', '+'];
    const queryArr = query.replace(/(\$|\*|\-|\+)/g, '_$1_').split('_');

        orderOperations.forEach(operator => {
            (function calcOperator () {
                const iOperator = queryArr.indexOf(operator);
                if (iOperator !== -1) {
                    const leftNumber = Number(queryArr[iOperator - 1]);
                    const rightNumber = Number(queryArr[iOperator + 1]);
                    const calcRes = operations[operator](leftNumber, rightNumber);
                    queryArr.splice(iOperator-1, 3, calcRes);
                    calcOperator()
                }
            })()
        });

    return isNaN(queryArr[0]) ? operations['400']() : Number(queryArr[0]);
}