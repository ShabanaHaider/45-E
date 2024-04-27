let PersonName :string = '';

PersonName = prompt('what is your name?') || '';

if(PersonName !== null && PersonName !== ''){
    alert(`Hello ${PersonName}, would you like to learn some Python today?`)
}
else{
    alert( 'You have to fill your name !')
}