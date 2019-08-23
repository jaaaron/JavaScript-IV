// CODE here for your Lambda Classes
class Person {
    counstructor(props) {
      this.name = props.name;
      this.age = props.age;
      this.location = props.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props)
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        return 'Today we are learning about ${subject}'
    }
    grade(student, subject) {
        return '${student.name} receives a perfect score on ${subject}'
    }
}

class Student extends Person {
    constructor(prop) {
        super(props)
        this.previousBackground = props.previousBackground
        this.className = props.className
        this.favSubjects = props.favSubjects
      }
      listSubjects() {
        this.favSubjects.forEach(subject => console.log(subject))
      }
      PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`)
      }
      sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props)
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(slackChan) {
        console.log(`${this.name} announces to ${channel}, '@channel standup time!​​​​​'`);
    }
    debugsCode(student, subject) {
        console.log(`{name} debugs {student.name}'s code on {subject}`)
    }
}