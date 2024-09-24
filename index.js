// //object

// // const aboutMe ={
// //     firstName: "Ubongabasi",
// //     lastName: "Ebebe",
// //     nickName: "AdinoFx",
// //     isEmployed: true,
// //     sayHello: function() {
// //         console.log(`Name: ${this.firstName} ${this.lastName}`);
// //         console.log(`Client Nickname: ${this.nickName}`);
// //         console.log(`Is client employed: ${this.isEmployed}`);
// //     }
// // }


// // aboutMe.sayHello();


// // Contructors

// // function Staff(name, age, jobRole, hobbies){
// //     this.name = name,
// //     this.age = age,
// //     this.jobRole = jobRole,
// //     this.hobbies = hobbies,
// //     this.staffDetails = function(){
// //         console.log(`Staff Name: ${this.name}`);
// //         console.log(`Staff Age: ${this.age}`);
// //         console.log(`Staff Job Role: ${this.jobRole}`);
// //         console.log(`Staff Hobbies: ${this.hobbies}`);
// //         console.log(`_________________________________`);
// //     }
// // }

// // const staff1 = new Staff("Ubongabasi Ebebe", 29, "Software Engineer", "Reading");
// // const staff2 = new Staff("Blessing Ene", 26, "Journalist", "Singing");

// // staff1.staffDetails();
// // staff2.staffDetails();


// //  Working with Class

// class Courses{
//     constructor(courseTitle, courseDuration, price){
//         this.courseTitle = courseTitle;
//         this.courseDuration = courseDuration;
//         this.price = price;
//     }

//     courseDiscount(discount){
//         if(this.courseDuration > 3){
//             return this.price - (this.price * discount);
//         }
//     }

//     soldCourse(discount){
//         console.log(`Course Title: ${this.courseTitle}`);
//         console.log(`Course Duration: ${this.courseDuration} Months`);
//         console.log(`Course Price: $${this.price.toFixed(2)}`);
        
//         if(this.courseDuration > 3){
//             console.log(`Course Discount: $${this.price * discount}`)
//         }
//         else{
//             console.log(`Discount Price: Nill`);
//         }
//         const totalPrice = this.price - (this.price * discount);
//         if(this.courseDuration > 3){
//             console.log(`Total Price: $${totalPrice.toFixed(2)} `);
//         }else{
//             console.log(`Total Price: $${this.price.toFixed(2)}`);
//         }
        
//         console.log(`___________________________________`);
//     }
// }

// const discount = 0.1;

// const course1 = new Courses("Web Technologies", 4, 1000);
// const course2 = new Courses("Time Management", 1, 550 );
// const course3 = new Courses("Git/GitHub Mastery", 2, 899);
// const course4 = new Courses("Software Engineering", 6, 1500)

// course1.soldCourse(discount);
// course2.soldCourse(discount);
// course3.soldCourse(discount);
// course4.soldCourse(discount);



let text = "victory";

text = text.trim().charAt(0).toUpperCase() + text.trim().slice(1).toLowerCase;
console.log(text);