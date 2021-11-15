class Person{
    //constructor
    //function for object creation
    constructor(name) {
        this.name = name;
        this.age;
    }
    //class function
    greeting(){
        console.log('hi, i am'+ ' ' + this.name + '!')
    }
    //setter and getter
    setAge(age){
        this.age = age;
    }
    getAge(){
        return this.age;
    }
}

