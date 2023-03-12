const checkSpam = (str) => {
  const wordlist = ["viagra", "XXX"];

  return (
    str.toLowerCase().includes(wordlist[0].toLowerCase()) ||
    str.toLowerCase().includes(wordlist[1].toLowerCase())
  );
};

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
