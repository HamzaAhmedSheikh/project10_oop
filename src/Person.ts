class Person {
    private personality: string;

    constructor() {
        this.personality = "Mystery";
    }

    askQuestion(answer: number): void {
        if (answer === 1) {
            this.personality = 'Extrovert'
        }

        else if (answer === 2) {
            this.personality = 'Introvert';
        }

        else {
            this.personality = 'You are still a mystery!';
        }
    }

    getPersonality(): string {
        return this.personality;
    }
}

export default Person;