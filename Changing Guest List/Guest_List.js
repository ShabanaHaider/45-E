"use strict";
let Guest_List = ['Ansar Burni', 'Adeeb Rizvi', 'Anwar Maqsood'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are requested to become a guest in Social Sciences Conference.\n\nThank You!\n\n');
}
let absent_Guest = 'Adeeb Rizvi';
let new_Guest = 'Razzak Dawood';
Guest_List[1] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are requested to become a guest in Social Sciences Conference.\n\nThank You!\n\n');
}
console.log(`Mr. ${absent_Guest} will not be able to join the Conference.`);
