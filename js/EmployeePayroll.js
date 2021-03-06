class EmployeePayrollData {

    id;
    name;
    profilePic;
    gender;
    department;
    salary;
    note;
    startDate;

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    
    get name() {return this._name;}
    set name(name) {
        let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name=name;
        else throw 'Name is Incorrect!';
    }

    get profilePic() {return this._profilePic;}
    set profilePic(profilePic) {
        this._profilePic=profilePic;
    }
    
    get gender() {return this._gender;}
    set gender(gender) {
        this._gender = gender;
    }

    get department() {return this._department;}
    set department(department) {
        this._department=department;
    }

    get salary() {return this._salary;}
    set salary(salary) {
        this._salary=salary;
    }

    get note() {return this._note;}
    set note(note) {
        this._note=note;
    }

    get startDate() {return this._startDate;}
    set startDate(startDate) {
        let now = new Date() ;
            if (startDate > now) throw 'Start Date is a Future Date!';
            var diff = Math.abs(now.getTime() - startDate.getTime());
            if (diff / (1000 * 60 * 60 * 24)>30)
              throw 'Start Date is Beyond 30 Days!';
        this._startDate = startDate;       
    }

    //method
    toString() {
        const options = { year:'numeric', month:'long', day:'numeric'};
        const empDate = this.startDate===undefined?"undefined":
                        this.startDate.toLocaleDateString("en-GB", options);
        return "id = " +this.id+", name = "+this.name+", gender = " +this._gender+
                ", profilePic = "+this._profilePic+ ", department = " +this._department+
                ", salary = " +this._salary+ ", startDate = " +empDate+ ",note = " +this._note;
    }
}