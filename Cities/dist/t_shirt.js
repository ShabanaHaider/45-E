"use strict";
// Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence,
//  such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, 
// at least one of which is not in the default country.
// function make_shirt(size:string, text:string){
//     console.log(`Creating a ${size} shirt with the message: ${text}`)
// }
// make_shirt('large','Jump in fear');
function c_ty(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
c_ty('Lahore');
c_ty('Islamabad');
c_ty("Perth", "Australia");
