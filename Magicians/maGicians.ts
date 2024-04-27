// Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

// below we are defining data type of array and keep sqaure bracket with string
// different methods  to access array for example for lookup, forEach , for of

let magician : string[] = ["Harry potor", "Peek a boo", "Abracadabra", "Justin dark"];

function show_magicians(magicians: string[]){

   magicians.forEach(element => {
    console.log(element);
   });

}
show_magicians(magician)
