/*Encapsulation : reduce complexity + increase reusability
  Abstraction : reduce complexity + isolate impact of changes
  Inheritance : Eliminate Redundant Code + reuse code from parent class to child class
  Polymorphism : refactor ugly switch/case statements

    let employee = {
        baseSalary : 20000,
        overtime : 10,
        rate : 20,
        getWage : function(){
            return this.baseSalary + (this.overtime * this.rate);
        }
    };
    console.log(employee.getWage());
*/
/*Object literal 
    const circle = {
        radius : 1,
        location: {
            x:1,
            y:1
        },
        draw : function(){
            console.log('draw');
        }
    }
    circle.draw();
*/

/*Factory Function 
    function createCircle(radius) {
        return {
            radius,
            draw : function(){
                console.log('draw');
            }
        };
    }
    const circle = createCircle(1);
    console.log(circle);
*/
/*Constructor function
    function Circle(radius){
        this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }
    }
    Circle.call({},1);
    Circle.apply({},[1, 2, 3]);
    const circle = new Circle(1);
    console.log(circle);
*/
/*Constructor Property
Every object in javaScript has a properity called constructor who refrences the function
that was used to construct or create that object*/
/*
//Primitives are copied by their values and objects are copied by their refrenece 
//Value Type 
    let x = 10;
    let y = x;
    x = 20;
    console.log(y);
//Reference Type 
    let z = {value:10};
    let a = z;
    z.value = 20;
    console.log(a.value);

//Value Type 
    let number = 10;
    function increase (number){
        number++;
    }
    increase(number);
    console.log(number);
//Reference Type 
    let obj = {value : 10};
    function increase (obj){
        obj.value++;
    }
    increase(obj);
    console.log(obj);
*/
/*Adding or Removing Properties
    function Circle(radius){
        this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }
    }
    const circle = new Circle(10);
    circle.location = {x:1};
    const propertyName = 'location';
    circle[propertyName] ={x:1};
//dynamicly delete a properity you don't want the user to see it
    delete circle['location'];
 */
/*Enumerating Properties
    function Circle(radius){
        this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }
    }
    const circle = new Circle(10);
    for(let key in circle){
        console.log(key, circle[key]);
    }
    for(let key in circle){
        if(typeof circle[key] != 'function')
        console.log(key, circle[key]);
    }
    const keys = Object.keys(circle);
    console.log(keys);
//in operator used to check if the draw element is found in the circle
    if ('draw' in circle) 
        console.log('draw function is in the circle');
*/

/*Private Properties and Methods 
Abstraction: is to hide the information and show the essentials
if we want to hide the details of function instead of calling it a propertity using this 
we can call it a local variable by using let inside the function
closure determain what variables accssable to the inner functions
scope detrmain the scope of the variables wether they can be accessable outside the function scope or not

    function Circle(radius) {
        this.radius =radius; //this is a property of the function
        let defaultLocation = {x:0,y:1}; //this is a local variable online accesssable inside this function
        let computeOptimumLocation = function(factor){
            //..
        }
        this.draw = function() {
            computeOptimumLocation(0.1);
            console.log('draw');
        };

    }
    const circle = new Circle(10);
    circle.draw();
*/

/*Getters/Setters
get use for read a proberty 
Set use for write and read
    function Circle(radius) {
        this.radius =radius; //this is a property of the function
        let defaultLocation = {x:0,y:1}; //this is a local variable online accesssable inside this function
        this.getDefaultLocation = function() {
            return defaultLocation;
        };
        this.draw = function() {
            console.log('draw');
        };
        //structure for getter property who is an object
        Object.defineProperty(this, 'defaultLocation', { 
            get: function() {
                return defaultLocation;
            },
            set: function (value) {
                if(!value.x || !value.y )
                    throw new Error ('Invalid Location');
                defaultLocation = value;
            }
        });
    }
    const circle = new Circle(10);
    circle.defaultLocation = 1;
*/

/*Exercise 
function stopwatch() {
    let startDate, endDate, duration=0, running;
    this.start = function() {
        if (running)
            throw new Error ('stopwatch already running');
        running = true;
        startDate = new Date();
    };
    this.stop = function() {
        if (!running)
            throw new Error ('stopwatch not running');
        running = false;
        endDate = new Date();
        const seconds = (endDate.getTime() - startDate.getTime())/ 1000;
        duration += seconds;
    };
    this.reset = function() {
        startDate = null;
        endDate = null;
        running = false;
        duration = 0;
        };
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }

    });
} 
*/