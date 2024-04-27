// Write a program that creates Objects containing these items.
// we can store one name in one variable. If we need to store more than one name then we will use array
// let person_Name :string = 'Ali'

// If we put let before any variable then we can change its value later on whereas when we use const then we cannot change its value later on
// when we create array we put [] in data type

// if we put number between names then it will not print as we have define data type as string. For printing number we have to modify data type


// const personName_Array :(string | number)[] = ['Anwar','9','Saba'];

// const personName_Array :string[] = ['person','car',"coldrink"];


// we have to define data types in interface

interface person {
    age : number ,
    name : string ,
    nationality : string ,
    student : Boolean

}



// these are key value pairs
let person  :person = {
    age :  26,
    name : 'Shabana' ,
    nationality : 'Paksitani' ,
    student : true

}
console.log(person);