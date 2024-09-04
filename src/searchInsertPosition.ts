export function searchInsert(nums: number[], target: number): number {
  const exists = nums.includes(target);
  if (exists) {
    return nums.findIndex((x) => {
      return x === target;
    });
  }

  const isLargerOrEqual = (element: number) => element >= target;
  const response = nums.findIndex(isLargerOrEqual);

  if (response >= 0) {
    return response;
  }

  return nums.length;
}