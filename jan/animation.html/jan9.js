//creating object

// const user1 = {
//     firstName: "Vaibhav",
//     lastName: "Sharma",
//     age: 25,
//     email: "vaibhavshrma002@gmail.com",
//     address: "mohali",
//     about: function () {
//         return user name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.
        
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// }

// const userMethod = {
//     about: function(){
//         return ${this.firstName} , ${this.lastName} , ${this.email} , ${this.age} , ${this.address} ;
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }
function createUser (firstName,lastName,email, age, address) {
    //this seprate both this.firstName=firstName
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    //reference
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    return user;
}
//now let send data to function and get our objects
// const obj1=createUser("aman","saho","aman123@gmail.com",23,"kharar");
// console.log(obj1);
// const myData = obj1.about();
// console.log(myData);
// const i18 = obj1.is18();
// console.log(i18);
// const obj2=createUser("chaman","saho","chaman123@gmail.com",29,"kharar");
// console.log(obj2);
// const obj3=createUser("pawan","saho","pawan123@gmail.com",23,"kharar");
// console.log(obj3);

// const aboutMe = user1.about();
// console.log(aboutMe);

//for multiple objects, we nee







function printInfo()
{
    console.log(`my name is ${this.age} and age is ${this.firstname}`);
}
    
   const user1=
   {
    firstname:"dixha",
    age:12,
    about:printInfo

   }
   const user2=
   {
    firstname:"rgre",
    age:12,
    about:printInfo
   }
   const user3=
   {
    firstname:"dixha",
    age:12,
    about:printInfo

   }
   console.log(user1.about());
   console.log(this);
   console.log(window);

   function fun()
   {
    console.log("hii");
   }
   fun();
// to call from one method to other----------->
  
  const user4=
   {
    firstname:"dixha",
    age:12,
    about: function()
    {
        console.log(`${this.firstname}`);
    }
   }
   const user5=
   {
    firstname:"arsh",
    age:12,
  
   }
   console.log(user4);
   user4.about.call(user5);
   
   // call , apply bind------>
   function about(hobby,favsinger)
   {
    console.log(`${this.firstnamr}`);
   }
   const obj1=
   {
    firstname:"rgre",
    age:12,
   }
   const obj2=
   {
    firstname:"dixha",
    age:12,
   }
   about.call(obj1,"yoga","gugju")
   console.log(obj1);
   about.apply(obj2,["musix","vsfds"])
   const mydata=about.bind(obj1);
   mydata();



   



