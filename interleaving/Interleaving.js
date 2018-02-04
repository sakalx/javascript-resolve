function interleave(...arrays) {
  const result = [];

  arrays[0] && arrays[0].forEach((arr, i) => {
    arrays.forEach(arg => arg[i]
        ? result.push(arg[i])
        : result.push(null),
    );
  });

  return result;
}