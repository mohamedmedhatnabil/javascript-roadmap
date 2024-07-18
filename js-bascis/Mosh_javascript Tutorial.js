/*console.log("Hello World")*/
/*Variables
    let firstName= 'Mohamed ';
    let lastName = 'Medhat';
    console.log(firstName + lastName);
*/
/*Constant Variable
    const interestRate = 0.7;
    console.log(interestRate);
*/
/*Primitive Types 
//the default value for a variable is undefined
    let name = 'Mohamed';         //String Literal
    let age = 21;                //Number Literal
    let lastName =undefined;    //undefined Literal
    let isMaried = false;      //Boolean Literal
    let selectedColor = null; //used when we want to reassign a value 
*/
/*Dynamic Typing 
Dynamic means that the variable can change it's type in runtime based on the values we assign to it
type of name;  //give me the type of the variable name
type of lastName is undefined because his value is set to be undefined
type of selectedColor is object 
*/
/*Objects 
//in the refrence type we have object, array, function

    let person = {
        name:'Mohamed',
        age:21
    };
//To access object value we can use dot notation or bracket notation
    person.age =22;
    console.log(person['age']);
    person['name'] = 'Medhat';
    console.log(person.name);
    let selection = 'name';
    person[selection] = 'Ahmed';
    console.log(person.name);
*/
/*Arrays 
    let names = ['Mohamed', 'Medhat', 'Ahmed', 'Mohamed'];
    names[4] =21;
    console.log(names);
    typeof names is object 
    consle.log(names.length) is 5
*/
/*Functions
//name is parmeter of the function and 'mohamed' is the argument(parmeter value) to the fumction
    function greet(name, age) {
        console.log('Hello ' + name + ' Your age is: ' + age );
    }
    greet('Mohamed Medhat', 21);

    function square(number) {
        return number * number;
    }
    let squaredNumber = square(3);
    console.log(squaredNumber);
*/