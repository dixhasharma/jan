function hello()
{
      console.log("hello");
}
hello();
console.log(hello.name);
hello.lastname="sahu";
console.log(hello.lastname);
console.log(hello.prototype);

hello.about=function()
{
    console.log("hello world");
}
console.log(hello.about);



hello.prototype.age=23;
hello.prototype.xyz="vgg";



//only function inherit prototype property
function person()     // constructor function
{
    this.name="john",
    this.age=23
}
const Person= new person();      //creating object
console.log(person.prototype);


function CreateUser (firstName,lastName,email, age, address) {
    //this seprate both this.firstName=firstName
    // const user = object.create(CreateUser.prototype)   ///by using object 2nd way
    this.firstName=firstName;
    this.lastName=lastName; 
    this.email=email;
    this.age=age;
    this.address=address;

    // user.about = userMethod.about;
    // user.is18 = userMethod.is18;
    // return user;
}

const Create= new CreateUser();       // first way
console.log(CreateUser.prototype);

//prototype
CreateUser.prototype.about=function()
{
    return`my nmae is ${this.firstname} age is ${this.age}}`
}
CreateUser.prototype.is18=function()
{
    return this.age>=18;
}
// const obj1=CreateUser("dixha","sahu")
// console.log(obj1);
// console.log(obj1.firstname);
// console.log(obj1.about);

const p1= new CreateUser();
console.log(p1);                           // third way

//class oops
class Animal{
constructor()
{
    this.name=name;
}
about()
{
    return `name is ${this.name}`;

}
infast()
{
    return thid.age>=3;
}
iscute()
{
    return true;
}
}
const obj=new Animal("d0s", 4);
console.log(obj.about());
