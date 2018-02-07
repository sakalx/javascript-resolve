// My Solution (not pretty but works faster)
Array.prototype.mapMany = function(fn) {
  let store = [];
  this.forEach(element => maping(fn(element)));

  function maping(element) {
    Array.isArray(element)
        ? recursion(element)
        : store.push(element);
  }

  function recursion(arr) {
    arr.forEach(e =>
        Array.isArray(e)
            ? maping(e)
            : store.push(e),
    );
  }

  return store;
};

// Better Solution
Array.prototype.mapMany = function (fn = (v)=>v) {
  return this.reduce((p,c)=>{
    const tmp = fn(c);
    return p.concat(Array.isArray(tmp)?tmp.mapMany():tmp);
  },[])
};

