function phAnalyzer(ph){
  if (ph >= 0 && ph < 7) {
    return "Acidic";
  } else if(ph === 7) {
    return "Neutral";
  } else if (ph =< 14 && ph > 7) {
    return "Alkaline";
  } else {
    return "invalid pH value";
  }
}

console.log(phAnalyzer(7));
console.log(phAnalyzer(4));
console.log(phAnalyzer(12));
console.log(phAnalyzer(25));
