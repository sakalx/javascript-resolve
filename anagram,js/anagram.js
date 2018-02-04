function anagrams([...word], words) {
  const sortedWord = word.sort().join();

  return words.filter(word => [...word].sort().join() === sortedWord)
}