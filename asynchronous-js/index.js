const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);
    setTimeout(() => {
        if(randomNumber < 4 ){
            resolve('You guessed right');
        } else{
            reject('You guessed false');
        }
    }); 
});
console.log(promise);