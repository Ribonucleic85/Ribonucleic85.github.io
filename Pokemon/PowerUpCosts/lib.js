const byId = (i) => { return document.getElementById(i); }
const fl = (f) => { return Number.parseFloat(f); }

const Candy = [
  1, 1, 1, 1,  1, 1, 1, 1,  1, 1, 1, 1,
  1, 1, 1, 1,  1, 1, 1, 1,  2, 2, 2, 2,
  2, 2, 2, 2,  2, 2, 2, 2,  2, 2, 2, 2,
  2, 2, 2, 2,  3, 3, 3, 3,  3, 3, 3, 3,
  3, 3, 4, 4,  4, 4, 4, 4,  4, 4, 4, 4,
  6, 6, 6, 6,  8, 8, 8, 8, 10,10,10,10,
  12,12,12,12, 15,15
];
Object.freeze(Candy);

const SDust = [
   200,  200,    200,  200,    400,  400,    400,  400,    600,  600,    600,  600,
   800,  800,    800,  800,   1000, 1000,   1000, 1000,   1300, 1300,   1300, 1300,
  1600, 1600,   1600, 1600,   1900, 1900,   1900, 1900,   2200, 2200,   2200, 2200,
  2500, 2500,   2500, 2500,   3000, 3000,   3000, 3000,   3500, 3500,   3500, 3500,
  4000, 4000,   4000, 4000,   4500, 4500,   4500, 4500,   5000, 5000,   5000, 5000,
  6000, 6000,   6000, 6000,   7000, 7000,   7000, 7000,   8000, 8000,   8000, 8000,
  9000, 9000,   9000, 9000,  10000,10000
];
Object.freeze(SDust);

const formSet = (n) => {
  candyField = byId('candyCost'+n);
  starField = byId('sdustCost'+n);
  luckyBox = byId('luckyBox'+n);
}

var candyField, starField, luckyBox, formNo;

// f = from, t = to
const calculateCost = (f,t) => {
  f = fl(f);
  t = fl(t);
  if (f>=t || f>39.5  || t>40 || f<1 || t<1.5)
    return (
    candyField.value = 0,
    starField.value = 0 );
  f = f/0.5-2;
  t = t/0.5-2;
  var
  c = 0,
  s = 0;
  for (; f<t; f++)
    c += Candy[f],
    s += SDust[f];
  if (luckyBox.checked)
    s /= 2; 
  candyField.value = c;
  starField.value = s;
}
