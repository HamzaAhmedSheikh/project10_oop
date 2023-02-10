import Person from "./Person.js";
class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = "";
    }
    get Name() {
        return this._name;
    }
    set Name(v) {
        this._name = v;
    }
}
export default Student;
