
// countdown assignment

// For loop
for (let i = 10; i > 0; i--) {
    console.log(i);
}

  // Console
    // 10
    // 9
    // 8
    // 7
    // 6
    // 5
    // 4
    // 3
    // 2
    // 1

for (let j = 5; j > -5; j--) {
    console.log(j);
}


  // Console
    // 5
    // 4
    // 3
    // 2
    // 1
    // 0
    // -1
    // -2
    // -3
    // -4

    
// for (let counter = 10; counter > 0; counter--) {
//     console.log(counter);
// }

// Do While Loop
let z = 10;

do {
  console.log(z);
  z--;
} while (z);

  // Console
    // 10
    // 9
    // 8
    // 7
    // 6
    // 5
    // 4
    // 3
    // 2
    // 1



// Outer Countdown
for (let x = 3; x > 0; x--) {
    console.log('Outer Countdown');
    
    for (let y = 5; y > 0; y--){
      console.log(x, y);
    }
}

  // Console
    // "Outer Countdown"
    // 3 5
    // 3 4
    // 3 3
    // 3 2
    // 3 1
    // "Outer Countdown"
    // 2 5
    // 2 4
    // 2 3
    // 2 2
    // 2 1
    // "Outer Countdown"
    // 1 5
    // 1 4
    // 1 3
    // 1 2
    // 1 1
