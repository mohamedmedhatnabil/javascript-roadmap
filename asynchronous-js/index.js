/*Promises
- What is a promise?
    a promise is an assurance or gurantee that something will happen in the
    future. a person can promise another a specific outcome on result.
    a promise is an object that holds the future value of an aync operation.
- Example: reqquesting some data from a server, the promis, promises us to get
    that data which we can use in future.
- States of a promise : PENDING FULFILLED REJECTED

*/

const promise = new Promise ((resolve, reject) => {
    const allWentWell = true;
    if(allWentWell) {
        resolve('All good');
    }else {
        reject('All wrong');
    }
});
/*
Promise {<fulfilled>: 'All good'}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "All good" */
console.log(promise);
