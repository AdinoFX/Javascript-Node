//object

const aboutMe ={
    firstName: "Ubongabasi",
    lastName: "Ebebe",
    nickName: "AdinoFx",
    isEmployed: true,
    sayHello: function() {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Client Nickname: ${this.nickName}`);
        console.log(`Is client employed: ${this.isEmployed}`);
    }
}


aboutMe.sayHello();
