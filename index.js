class EssoStaffs {
    constructor(name, age, role){
        this.name = name,
        this.age = age,
        this.role = role
    }
    staffDetails(){
        console.log(`Staff Name: ${this.name}`);
        console.log(`Staff Age: ${this.age}`);
        console.log(`Staff Role: ${this.role}`);
        console.log(`******************************`);
    }
    set name(newName){
        if(typeof newName === "string" && newName.length > 0){
            this._name = newName;
        }else{
            console.error("Name should contain alphabets");
        }
    }
}

const staff1 = new EssoStaffs("due", "GUY", 9890);
const staff2 = new EssoStaffs("Francis Idowu", 26, "Lifestyle Videography");

staff1.staffDetails();
staff2.staffDetails();