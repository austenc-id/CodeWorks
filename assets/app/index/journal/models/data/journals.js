import { Journal } from "../Journal.js";
import { Week } from "../Week.js";
import { Entry } from "../Entry.js";


export const journals = [
  new Journal(
    {name: 'async', week: 4}
  ),
  //new Journal(
  //  {name: 'async', week: 3}
  //),
  //new Journal(
  //  {name: 'async', week: 2}
  //),
  //new Journal(
  //  {name: 'async', week: 1}
  //),
]

export const weeks = [
  new Week (
    {week: 4, mon: '9-6-21', tues: '9-7-21', wed: '9-8-21', thurs: '9-9-21', quiz: 'quiz'}),
  new Week (
    {week: 3, mon: '8-30-21', tues: '8-31-21', wed: '9-1-21', thurs: '9-2-21', quiz: 'quiz'}),
  ]

export const entries = [
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
        r3: 'To the compiler async looks like synchronous code, making it easier to debug.',}),
    new Entry (
      {date: '9-9-21', title: 'REST',
        q1:'What does REST stand for, and in simple terms what does it mean?',
        r1: ' Representational State Transfer. It means when called on, the server will transfer a representation of the requested data.',
        q2: 'What does Stateless mean?',
        r2: 'Stateless means the server does not save any data about the user it interacts with.',
        q3: 'What URL pattern is used when writing a RESTful API?',
        r3: 'A URL that identifies the user and the HTTP method GET.',
    }),
    new Entry (
      {date: '8-30-21', title: '',
        q1:'',
        r1: '',
        q2: '',
        r2: '',
        q3: '',
        r3: '',
    }),
  ]
