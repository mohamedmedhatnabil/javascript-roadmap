const promiseOne = new Promise((resolve, reject) => {
    resolve('promise one is resolved')});
const promiseTwo = new Promise((resolve, reject) => {
    resolve('promise two is resolved');
});
const promiseThree = new Promise((resolve, reject) => {
    reject('promise three is rejected');
});
promiseOne.then((value) => {
    console.log(value);});
    promiseTwo.then((value) => {
        console.log(value);});
    promiseThree.catch((err) => {
        console.log(err);
})
