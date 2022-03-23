function minimumNumber(n, password) {
  let obj = {
    numbers: /\d/g,
    lower_case: /[a-z]/,
    upper_case: /[A-Z]/,
    special_characters: /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/,
  };

  if (!password.match(obj.numbers)) {
    password += ".";
  }
  if (!password.match(obj.lower_case)) {
    password += ".";
  }
  if (!password.match(obj.upper_case)) {
    password += ".";
  }
  if (!password.match(obj.special_characters)) {
    password += ".";
  }
  let subs = 0;
  let splitPoint = password.match(/\./g);
  let splitAmount = splitPoint ? splitPoint.length : 0;
  if (password.length < 6) {
    subs = 6 - password.length + splitAmount;
  } else {
    subs = splitAmount;
  }
  console.log(subs, password);
  return subs;
}

minimumNumber(3, "Ab1"); //expected 3 
minimumNumber(11, "#HackerRank"); //expected 1 
minimumNumber(2, "12"); //epected 4 counter 1
minimumNumber(4, "g1A!"); //expected 2
minimumNumber(7, "AUzs-nV"); //expected 1


