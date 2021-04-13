let guest1 = false
let guest2 = false

if (guest1 && guest2) {
    console.log('set 2 places for our guests');
} else if (guest1 || guest2) {
    console.log('set just one place for a guest');
} else {
    console.log('nobody coming over');
}