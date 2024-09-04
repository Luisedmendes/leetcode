export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const greatestNumber: number = Math.max(...candies);
  const response: Array<boolean> = [];

  candies.map((x) => {
    x += extraCandies;

    if (x >= greatestNumber) {
      return response.push(true);
    }

    return response.push(false);
  });
  return response;
}
