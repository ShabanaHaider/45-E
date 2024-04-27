

let Guest_List :string[] = ['Ansar Burni', 'Adeeb Rizvi', 'Anwar Maqsood'];

// for(let i =0; i<Guest_List.length; i++){

    // console.log('Dear Mr. '  + Guest_List[i] + ',\n\nYou are requested to become a guest in Social Sciences Conference.\n\nThank You!\n\n')
// }

let absent_Guest :string = 'Adeeb Rizvi' ;

let new_Guest :string = 'Razzak Dawood' ;

Guest_List[1] = new_Guest ;
// for(let i =0; i<Guest_List.length; i++){

    //console.log('Dear Mr. '  + Guest_List[i] + ',\n\nYou are requested to become a guest in Social Sciences Conference.\n\nThank You!\n\n')}
    


console.log(`Mr. ${absent_Guest} will not be able to join the Conference.`);

console.log ('Good News! We got a bigger venue for Conference so we are inviting more guests')
// i have added 3 guest in array
Guest_List.unshift('Abida Parveen') ;
Guest_List.splice(3 , 0 , 'Bushra Ansari') ;
Guest_List.push('Abdul Bari') ;

// Here i have printed array of 6 guest
for(let i =0; i<Guest_List.length; i++){

    console.log('Dear Mr. '  + Guest_List[i] + ',\n\nYou are requested to become a guest in Social Sciences Conference.\n\nThank You!\n\n')
}
// sorry message to guest for not inviting
console.log('\nSorry due to some obvious reasons, only two guest will attend the conference.')
// here i have removed guest
while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
    
    console.log(` Sorry Mr. ${remove_Guest}, You are not invited in the Conference due to some obvious reasons.`);
}

for(let i =0; i<Guest_List.length; i++){

    console.log('Dear Mr. '  + Guest_List[i] + ',\n\nYou are still invited in Social Sciences Conference.\n\nThank You!\n\n')
}
// I have remove all guest from the array
Guest_List.splice(0, 2);

console.log(Guest_List);





