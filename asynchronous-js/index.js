const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise one resolved')
    },2000);
});
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise two resolved')
    },1500);
});
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise three resolved')
    },500);
});
Promise.all([promiseOne, promiseTwo, promiseThree]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
/*We use this method to make sure all the requests were resolved because when one promise
 is rejected it will show me the rejected one and when all the requests is resolved it show me that all is resolved */