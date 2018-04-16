________________________________________________________
________________________________________________________
# Deep - map

**Write**
`Array.prototype.mapMany = function (fn) {}`

> That lets you collapthat lets you collapse a multidimensional sequence
in a way that would otherwise require multiple [].map() or loops.

## For example
```
[1, [2, [3]]].mapMany(num => num) === [1, 2, 3]

function Person() {
    this.data = [1, [2, [3]]];
}
[new Person(), new Person(), new Person()]
.mapMany(person => person.data) === [1, 2, 3, 1, 2, 3, 1, 2, 3];
```
________________________________________________________