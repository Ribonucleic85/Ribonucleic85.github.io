const numOfCubies = n => Math.round(n**3 - (n-2)**3);
const isSquare = n => hasNthRoot(n,2);
const hasNthRoot = (num,expo) => Math.round((num**(1/expo)>>0)**expo)==num;
