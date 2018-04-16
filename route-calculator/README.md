________________________________________________________
________________________________________________________
# Task:
This calculator takes values that could be written in a browsers route path as a single string. It then returns the result as a number (or an error message).

Route paths use the '/' symbol so this can't be in our calculator. Instead we are using the '$' symbol as our divide operator.

You will be passed a string of any length containing numbers and operators:

>'+' = add
'-' = subtract
'*' = multiply
'$' = divide

Your task is to break the string down and calculate the expression using this order of operations.
**(division => multiplication => subtraction => addition)**

If you are given an invalid input you should return the error message: '400: Bad request'

### Remember:

>Operations are infinite
Order of operations is imperitive
No .eval or equivalent functions
### For example:
```
calculate('1+1')     => '2'
calculate('10$2')    => '5'
calculate('1.5*3')   => '4.5'

calculate('5+5+5+5') => '20'

calculate('1000$2.5$5+5-5+6$6') =>'81'

calculate('10-9p')   =>  '400: Bad request'
```
________________________________________________________
________________________________________________________