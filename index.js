const names=["Guadalupe", "Ollie", "Aki"];

function writeCards(newNames,string){
    const messages = [];
    for(let i = 0;i < newNames.length; i++){
        const birthdayMesssage =( (`Thank you, ${newNames[i]}, for the wonderful ${string} gift!`));
        messages.push(birthdayMesssage);
    }   
    
    return messages;
}

function countDown(num){
    while (num>=0){
        console.log(num--);
    }
}