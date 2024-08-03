/*
- Asynchronous is a process that allows an application to run a second set
    of instructions while focusing on it's primary or basic process. 
    - it has several benefits including improved application performance,
    wide application to different coding languages, and better user experience.
    - A few use cases for asynchronous include reduced inefficiencies from an 
    application and efficient data collection.


 */

function task1 (callback) {
    setTimeout( () => {
        console.log('1. Create index.html file')
        callback();
    }, 1000);
};
function task2 (callback) {
    setTimeout( () => {
        console.log('2. Create styles.css file')
        callback();
    }, 2000);
};
function task3 (callback) {
    setTimeout( () => {
        console.log('3. Create script.js file')
        callback();
    }, 500);
};
function task4 (callback) {
    setTimeout( () => {
        console.log('4. Link all three files')
        callback();
    }, 4000);    
};
//callback hell
task1(() =>{
    task2(() => {
        task3(() => {
            task4(()=>{

            })
        })
    })
})


