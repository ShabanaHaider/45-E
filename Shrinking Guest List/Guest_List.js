"use strict";
let Guest_List = ['Ansar Burni', 'Adeeb Rizvi', 'Anwar Maqsood'];
// for(let i =0; i<Guest_List.length; i++){
// console.log('Dear Mr. '  + Guest_List[i] + ',\n\nYou are requested to become a guest in Social Sciences Conference.\n\nThank You!\n\n')
// }
let absent_Guest = 'Adeeb Rizvi';
let new_Guest = 'Razzak Dawood';
Guest_List[1] = new_Guest;
// for(let i =0; i<Guest_List.length; i++){
//console.log('Dear Mr. '  + Guest_List[i] + ',\n\nYou are requested to become a guest in Social Sciences Conference.\n\nThank You!\n\n')}
console.log(`Mr. ${absent_Guest} will not be able to join the Conference.`);
console.log('Good News! We got a bigger venue for Conference so we are inviting more guests');
Guest_List.unshift('Abida Parveen');
Guest_List.splice(3, 0, 'Bushra Ansari');
Guest_List.push('Abdul Bari');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are requested to become a guest in Social Sciences Conference.\n\nThank You!\n\n');
}
console.log('\nSorry due to some obvious reasons, only two guest will attend the conference.');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(` Sorry Mr. ${remove_Guest}, You are not invited in the Conference due to some obvious reasons.`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited in Social Sciences Conference.\n\nThank You!\n\n');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
