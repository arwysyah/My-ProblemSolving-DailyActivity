const texts = "nanan";

const isPalindrome = (arg) => {
  let emp = "";
  for (let a of arg) {
    emp = a + emp;
  }
  if (emp == arg) {
    return true;
  }
  return false;
};

console.log(isPalindrome(texts));
