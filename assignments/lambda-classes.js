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
    constructor(props) {
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
        console.log(`${this.name} announces to ${slackChan}, '@channel standup time!​​​​​'`);
    }
    debugsCode(student, subject) {
        console.log(`{name} debugs {student.name}'s code on {subject}`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const ed = new Instructor({
    name: 'Ed',
    location: 'Rock',
    age: 33,
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `Live to Code`
  });

  const Ted = new Student({
    name: 'Ted',
    age: 32,
    location: 'Bay Area',
    gender: 'male',
    previousBackground: 'Software Developer',
    className: 'Web23',
    favSubjects: [
      'Math',
      'Programming',
      'English'
    ],
  })

  const will = new Student({
    name: 'Will',
    age: 32,
    location: 'San Jose',
    gender: 'male',
    previousBackground: 'FullStack Developer',
    className: 'Web23',
    favSubjects: [
      'English',
      'Programming',
      'Math'
    ],
  })

  const jessica = new ProjectManager({
    name: 'Jessica',
    age: 27,
    location: 'Ann Arbor',
    gender: 'female',
    gradClassName: 'CS10',
    favInstructor: 'Marco',
  })

  const alice = new ProjectManager({
    name: 'Alice',
    age: 27,
    location: 'Ann Arbor',
    gender: 'female',
    gradClassName: 'CS10',
    favInstructor: 'Marco',
  })

fred.speak();

// Instructor
fred.demo('React.js');
ed.grade(fred, 'JavaScript');

// Student
will.listSubjects();
Ted.PRAssignment('CSS');
will.sprintChallenge('Advanced CSS');

// Project Manager
jessica.standUp('web22');
jessica.debugsCode(fred, 'Node.js');