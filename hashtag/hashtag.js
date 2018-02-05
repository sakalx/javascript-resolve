const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

function generateHashtag(str) {
  if (!str.trim()) {
    return false;
  }
  const hashtag = '#' + str.split(' ').map(capitalize).join('');

  return hashtag.length < 140 ? hashtag : false;
}
