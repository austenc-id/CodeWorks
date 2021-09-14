import { Journal } from "../Journal.js";
import { Week } from "../Week.js";
import { Entry } from "../Entry.js";


export const journals = [
  new Journal(
    {name: '', week: 5}
  ),
  new Journal(
    {name: '', week: 4}
  ),
  new Journal(
    {name: '', week: 3}
  ),
  new Journal(
    {name: '', week: 2}
  ),
  new Journal(
    {name: '', week: 1}
  ),
]

export const weeks = [
  new Week (
    {week: 5, mon: '9-13-21', tues: '9-14-21', wed: '9-15-21', thurs: '9-16-21', quiz: 'quiz'}),
  new Week (
    {week: 4, mon: '9-6-21', tues: '9-7-21', wed: '9-8-21', thurs: '9-9-21', quiz: 'quiz'}),
  new Week (
    {week: 3, mon: '8-30-21', tues: '8-31-21', wed: '9-1-21', thurs: '9-2-21', quiz: 'quiz'}),
  new Week (
    {week: 2, mon: '8-23-21', tues: '8-24-21', wed: '8-25-21', thurs: '8-26-21', quiz: 'quiz'}),
  new Week (
    {week: 1, mon: '8-16-21', tues: '8-17-21', wed: '8-18-21', thurs: '8-19-21', quiz: 'quiz'}),
  ]

export const entries = [
  //SECTION Week 5
  //SECTION Week 4
    new Entry (
      {date: '9-6-21', title: 'Callback Hell', 
        q1:'What are some of the signs and causes of Callback Hell?',
        r1: 'When a developer tries to write synchronous JavaScript that executes from top to bottom using callbacks; it creates a messy and ineffective type of code.',
        q2: 'What does the asynchronous mean and how are callbacks involved?',
        r2: 'Asynchronous, in literal translation, means: not at the same time. Callbacks are used when requesting data from alternate sources (interally or externally).',
        q3: '',
        r3: '',
    }),
    new Entry (
      {date: '9-7-21', title: 'JavaScript Promises',
        q1:'What are the three states of a Promise?',
        r1: 'Pending, resolved, and rejected.',
        q2: 'How do promises seek to resolve the issues of "callback hell"?',
        r2: 'Chaining, by attaching Callbacks to Promises rather than passing them, (in theory) can stop callback hell before it starts.',
        q3: 'What is the difference between .then() and .catch()?',
        r3: 'Then is called when a Promise is resolved. Catch is when a Promise is rejected.',
    }),
    new Entry (
      {date: '9-8-21', title: 'Async and Await',
        q1:'What is the purpose of Async/Await?',
        r1: 'To abstract Promises making them easier to read and debug.',
        q2: 'What must you do in order to await a promise inside of a function?',
        r2: 'Define the function as async.',
        q3: 'What are some of the primary benefits of Async/Await?',
        r3: 'To the compiler async looks like synchronous code, making it easier to debug.',
      }),
    new Entry (
      {date: '9-9-21', title: 'REST',
        q1:'What does REST stand for, and in simple terms what does it mean?',
        r1: ' Representational State Transfer. It means when called on, the server will transfer a representation of the requested data.',
        q2: 'What does Stateless mean?',
        r2: 'Stateless means the server does not save any data about the user it interacts with.',
        q3: 'What URL pattern is used when writing a RESTful API?',
        r3: 'A URL that identifies the user and the HTTP method GET.',
    }),
    //SECTION Week 3
    new Entry (
      {date: '9-2-21', title: '',
        q1:'What problems does the Observer Pattern seek to solve?',
        r1: '',
        q2: 'What are the three mechanisms of the observer pattern?',
        r2: '',
        q3: 'Review the code generated from the bcw-template and reflect on the proxy objects from yesterday, and your understanding of the observer pattern today. With this knowledge, explain how the magic of the bcw-template uses these two concepts to manage and update the dom.',
        r3: '',
        link: 'https://codeworksacademy.com/fs-student-guide/resources/wk3/04-ObserverPattern/#answer-the-following-questions',
        build: '',
    }),
    new Entry (
      {date: '9-1-21', title: '',
        q1:'What are the two common operations that we will set in the handler?',
        r1: '',
        q2: 'What do you have to make sure you are doing with every Get to insure the value does not become undefined?',
        r2: '',
        q3: 'What are some of the benefits of the proxy object that we are using in our structure for applications?',
        r3: '',
        link: 'https://codeworksacademy.com/fs-student-guide/resources/wk3/03-Proxies/#answer-the-following-questions',
        build: '',
    }),
    new Entry (
      {date: '8-31-21', title: '',
        q1:'What is the purpose of Encapsulation?',
        r1: '',
        q2: 'What were some of the problems with closures and the underscore prefix?',
        r2: '',
        q3: 'How do we create private variables in a ES6 Class? Why would you do this?',
        r3: '',
        link: 'https://codeworksacademy.com/fs-student-guide/resources/wk3/02-Encapsulation/#using-private-fields',
        build: '',
    }),
    new Entry (
      {date: '8-30-21', title: '',
        q1:'What problem does using exports solve?',
        r1: '',
        q2: 'How does export differ from export default?',
        r2: '',
        q3: 'What is a benefit of using the Module System?',
        r3: '',
        link: 'https://codeworksacademy.com/fs-student-guide/resources/wk3/01-Modules/#conclusion',
        build: '',
    }),
    //SECTION Week 2
     new Entry (
      {date: '8-26-21', title: '',
        q1:'What are the benefits of making a plan before starting to just write the code?',
        r1: '',
        q2: 'How do you find answers when you are stuck?',
        r2: '',
        q3: 'From the entire article what are your biggest takeaways?',
        r3: '',
        link: 'https://codeworksacademy.com/fs-student-guide/resources/wk2/06-Coding-Mistakes/#answer-the-following-questions',
        build: '',
    }),
     new Entry (
      {date: '8-25-21', title: '',
        q1:'What are the main ways to write information to the console? Why/when should you use each style.',
        r1: '',
        q2: 'Which tab allows you to see the breakdown of HTML/CSS and how can this tab be useful when debugging HTML?',
        r2: '',
        q3: 'Outside of writing everything to the console, what is a better way to debug your code?',
        r3: '',
        link: 'https://codeworksacademy.com/fs-student-guide/resources/wk2/03-Chrome-Dev-Tools/#opening-chrome-developer-tools',
        build: '',
    }),
     new Entry (
      {date: '8-24-21', title: '',
        q1:'What are the three ways to syntactically write a function? What are the differences in how the function acts (if any)?',
        r1: '',
        q2: 'What is the difference between Parameters and Arguments?',
        r2: '',
        q3: 'What are higher order functions? Can you provide an example?',
        r3: '',
        link: 'https://codeworksacademy.com/fs-student-guide/resources/wk2/02-Functions/#key-takeaways',
        build: '',
    }),
     new Entry (
      {date: '8-23-21', title: '',
        q1:'What is Scope ?',
        r1: '',
        q2: 'What is Hoisting ?',
        r2: '',
        q3: 'In what cases might you use let vs const vs var?',
        r3: '',
        link: 'https://codeworksacademy.com/fs-student-guide/resources/wk2/01-Let-Var-Const/#const',
        build: '',
    }),
    //SECTION Week 1
    new Entry (
      {date: '8-19-21', title: '',
        q1:'What is the purpose of wire-framing?',
        r1: '',
        q2: 'What are the different levels of detail in wire-frames and why is each one useful?',
        r2: '',
        q3: 'Do you think wire-frames are worth the Time, Energy, and Effort that they require? Why or Why not?',
        r3: '',
        link: 'https://codeworksacademy.com/fs-student-guide/resources/wk1/06-Wireframing/#what-is-a-wireframe-and-who-uses-them',
        build: '',
    }),
    new Entry (
      {date: '8-18-21', title: '',
        q1:'What is your favorite tip that you think is the most beneficial to improving your design?',
        r1: '',
        q2: 'Compile a couple resources that you think might be helpful when trying to review examples of good design ideas.',
        r2: '',
        q3: 'How do you think good design influences people when visiting a website and what sorts of things could you convey through design alone?',
        r3: '',
        link: 'https://codeworksacademy.com/fs-student-guide/resources/wk1/04-Cheating-at-Design/#not-every-button-needs-a-background-color',
        build: '',
    }),
    new Entry (
      {date: '8-17-21', title: '',
        q1:'What is a Pseudo-Class and what are some of the most common ones you think you will use?',
        r1: '',
        q2: 'What is Specificity and how might you use it to your benefit?',
        r2: '',
        q3: 'What problems do you think you could run into if you over-utilized the !important feature?',
        r3: '',
        link: 'https://codeworksacademy.com/fs-student-guide/resources/wk1/03-CSS/#css-specificity',
        build: '',
    }),
    new Entry (
      {date: '8-16-21', title: 'Git, Get, Got?',
        q1:'In your own words, why do we use Git?',
        r1: "Git is a version control manager. It's designed to preserve code at every stage of development.",
        q2: 'What are the benefits of having multiple branches?',
        r2: 'Creating new branches lets a development team assess multiple concepts, ideas, and solutions without damaging any previously successful code.',
        q3: 'What is the difference between Git and GitHub?',
        r3: "As the name implies Github is the online hub for a projects's Git repositories. It is a tool designed for teams to collaborate in an environment that requires a great deal of independant work.",
        link: 'https://codeworksacademy.com/fs-student-guide/resources/wk1/01-GIT/',
    }),
  ]
