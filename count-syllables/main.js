const numberSyllables = string => string.split("-").length;


console.log('numberSyllables("buf-fet")', numberSyllables("buf-fet"));
console.log('numberSyllables("beau-ti-ful")', numberSyllables("beau-ti-ful"));
console.log(
  'numberSyllables("mon-u-men-tal")',
  numberSyllables("mon-u-men-tal")
);

console.log(
  'numberSyllables("on-o-mat-o-poe-ia")',
  numberSyllables("on-o-mat-o-poe-ia")
);
