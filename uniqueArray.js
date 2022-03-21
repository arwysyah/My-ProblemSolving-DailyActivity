function lonelyinteger(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == arr[i]) {
        count++;
      }
    }

    if (count == 1) {
      return arr[i];
    }
  }
}
