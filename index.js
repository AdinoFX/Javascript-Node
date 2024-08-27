//object

// const aboutMe ={
//     firstName: "Ubongabasi",
//     lastName: "Ebebe",
//     nickName: "AdinoFx",
//     isEmployed: true,
//     sayHello: function() {
//         console.log(`Name: ${this.firstName} ${this.lastName}`);
//         console.log(`Client Nickname: ${this.nickName}`);
//         console.log(`Is client employed: ${this.isEmployed}`);
//     }
// }


// aboutMe.sayHello();


// Contructors

function Staff(name, age, jobRole, hobbies){
    this.name = name,
    this.age = age,
    this.jobRole = jobRole,
    this.hobbies = hobbies,
    this.staffDetails = function(){
        console.log(`Staff Name: ${this.name}`);
        console.log(`Staff Age: ${this.age}`);
        console.log(`Staff Job Role: ${this.jobRole}`);
        console.log(`Staff Hobbies: ${this.hobbies}`);
        console.log(`_________________________________`);
    }
}

const staff1 = new Staff("Ubongabasi Ebebe", 29, "Software Engineer", "Reading");
const staff2 = new Staff("Blessing Ene", 26, "Journalist", "Singing");

staff1.staffDetails();
staff2.staffDetails();
