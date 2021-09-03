function digitalHouse(a, b) {
  for (let i = 1; i <= 100; i++) {
    if ((a % i == 0 && b % i == 0) || (i % a == 0 && i % b == 0)) {
      console.log('digital house')
    } else if (b % i == 0 || i % b == 0) {
      console.log('house')
    } else if (a % i == 0 || i % a == 0) {
      console.log('digital')
    } else {
      console.log(i)
    }
  }
}

digitalHouse(5, 50)
