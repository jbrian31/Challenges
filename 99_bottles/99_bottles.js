function bottleSong(startingNumber = 99) {
  for (let bottle = startingNumber; bottle > 2; bottle--) {
    console.log(`${bottle} bottles of beer on the wall, ${bottle} bottles of beer. \n
Take one down and pass it around, ${bottle - 1} bottles of beer on the wall.`);
  }
  console.log(`Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`);
}

bottleSong();
let a = [1, 2, 3];
