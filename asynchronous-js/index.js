/*
- Asynchronous is a process that allows an application to run a second set
    of instructions while focusing on it's primary or basic process. 
    - it has several benefits including improved application performance,
    wide application to different coding languages, and better user experience.
    - A few use cases for asynchronous include reduced inefficiencies from an 
    application and efficient data collection.


 */


setTimeout( () => {
    console.log('1. Create index.html file')
}, 1000
);
setTimeout( () => {
    console.log('2. Create styles.css file')
}, 2000
);
setTimeout( () => {
    console.log('3. Create script.js file')
}, 3000
);
setTimeout( () => {
    console.log('4. Link all three files')
}, 4000
);
