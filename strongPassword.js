function minimumNumber(n, password) {
  let counter = 0;
  let numbers = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special_characters = "!@#$%^&*()-+";

  let obj = [
    [{ counter, amount: 0 }],
    [{ numbers, amount: 0 }],
    [{ lower_case, amount: 0 }],
    [{ upper_case, amount: 0 }],
    [{ special_characters, amount: 0 }],
  ];

  // Return the minimum number of characters to make the password strong
  //   for (let i = 0; i < 5; i++) {
  for (let i = 0; i < obj.length; i++) {
    console.log(obj[i][0].counter, (obj[i][0].amount = counter++));
    if (password.includes(obj[i][0].numbers) && amount == 0) {
      obj[k].counter++;
    }
    if (password.includes(lower_case)) {
      counter++;
    }
    if (password.includes(upper_case)) {
      counter++;
    }
    if (password.includes(special_characters)) {
      counter++;
    }
  }

  //   }
}

minimumNumber(3, "Ab1");
