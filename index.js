const names=["Guadalupe", "Ollie", "Aki"];
function writeCards(names,string){
    const messages = [];
    for(let i = 0;i < names.length; i++){
        const birthdayMesssage =( (`Thank you, ${names[i]}, for the wonderful ${string} gift!`));
        messages.push(birthdayMesssage);
    }   
    
    return messages;
}
console.log(writeCards(names, 'surprise'));

function countDown(num){
    while (num>=0){
        console.log(num--);
    }
}