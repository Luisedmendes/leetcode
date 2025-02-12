export default function mergeAlternately(word1: string, word2: string): string {
  const word1Array = word1.split('');
  const word2Array = word2.split('');
  const word1Lenght = word1Array.length;
  const word2Lenght = word2Array.length;

  let data = '';

  let wordLenght: number;

  if (word1Lenght === word2Lenght) {
    wordLenght = word1Lenght;
  } else if (word1Lenght > word2Lenght) {
    wordLenght = word1Lenght;
  } else {
    wordLenght = word2Lenght;
  }
  for (let i = 0; i < wordLenght; i++) {
    const x = word1Array[i];
    const y = word2Array[i];

    if (x) {
      data += x;
    }

    if (y) {
      data += y;
    }
  }

  return data;
}
