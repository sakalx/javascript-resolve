function order(str) {
  return str.split(' ')
            .sort((a,b) => a.match(/\d/g) - b.match(/\d/g))
            .join(" ")
}