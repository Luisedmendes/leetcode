export function romanToInt(s: string): number {
  const data: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const x = s.split('');

  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    let somou = false;
    if (x[i] === 'I') {
      if (x[i + 1] === 'V') {
        sum += 4;
        somou = true;
        i += 1;
      } else if (x[i + 1] === 'X') {
        somou = true;
        sum += 9;
        i += 1;
      }
    }

    if (x[i] === 'X') {
      if (x[i + 1] === 'L') {
        somou = true;
        sum += 40;
        i += 1;
      } else if (x[i + 1] === 'C') {
        somou = true;
        sum += 90;
        i += 1;
      }
    }

    if (x[i] === 'C') {
      if (x[i + 1] === 'D') {
        somou = true;
        sum += 400;
        i += 1;
      } else if (x[i + 1] === 'M') {
        somou = true;
        sum += 900;
        i += 1;
      }
    }

    if (!somou) sum += data[x[i]];
  }

  return sum;
}
