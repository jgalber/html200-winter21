// Spanish-suited playing cards
const baraja = [['cups', 'coins', 'swords', 'clubs'], ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'sota', 'knight', 'king']];

  for (let x = 0; x < baraja[0].length; x++) {
    // console.log(x);
    for (let y = 0; y < baraja[1].length; y++) {
      // console.log(y);
      let naipes = baraja[1][y] + " of " + baraja[0][x];
        console.log(naipes);
      }
  }