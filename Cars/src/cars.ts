// Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

// use of spread operator

function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: { [key : string] : any } [] ){

// object creation

    const carInfo = {
    manufacturer,
    modelName,
    ...Object.assign({}, ...extraOption)

}

return carInfo;

};

let ans = storeCarInfo('Honda','Civic',{Color:'black'}, {features:['4 wheel drive', 'Power Steering']})

console.log(ans);
// the method of object and assign work on target and source