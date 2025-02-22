export function plusOne(digits: number[]): number[] {
  const x = parseInt(digits.toString().replaceAll(',', '')) + 1;

  return Array.from(String(x), Number);
}
