export default function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let greatestNumber: number = Math.max(...candies);
  let response: Array<boolean> = []

  candies.map(x => {
    x += extraCandies;
    
    if (x >= greatestNumber) {
      return response.push(true);
    };

    return response.push(false);
    });
    return response;
};
