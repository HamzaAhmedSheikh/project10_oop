class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(answer) {
        if (answer === 1) {
            this.personality = 'Extrovert';
        }
        else if (answer === 2) {
            this.personality = 'Introvert';
        }
        else {
            this.personality = 'You are still a mystery!';
        }
    }
    getPersonality() {
        return this.personality;
    }
}
export default Person;
