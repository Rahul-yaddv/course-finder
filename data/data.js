const courses = [
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to React Native",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail: "/react_native.png", //Link to the course thumbnail
    duration: "4 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up ./public/react_native.png.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Debugging React native Apps.",
        content:
          "Debugging introduction,Handling Errors , Using the React Devtools",
      },
      {
        week: 4,
        topic:
          "Building Adaptive User interfaces(Adapt to Platform & Device Sizes)",
        content: "Setting Dynamic widths,introductin to Dimensions API",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    id: 2, // Unique identifier for the course
    name: "Introduction to React.Js",
    instructor: "kanny larson", // Name of the course instructor
    description:
      "Learn the basics of Reactjs development and building your own SPA.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail: "/reactjs.png", //Link to the course thumbnail
    duration: "4 weeks", // Duration of the course
    schedule: "Monadays and wednesday, 2:00 PM - 4:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "basic html knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React js",
        content:
          "Overview of React js, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your own SPA",
        content: "Creating a simple SPA app using React js components.",
      },
      {
        week: 3,
        topic: "Components,JSX,Props,State & More",
        content:
          "How react handles components,outputting dynamic content,Props information.",
      },
      {
        week: 4,
        topic: "Working with Forms & user input and custom hooks",
        content:
          "How to make custom hooks in react ,Controlled and uncontrolled input in react",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 3, // Unique identifier for the course
    name: "Complete Nodejs Developer course",
    instructor: "larry jackson", // Name of the course instructor
    description:
      "Learn Node.js by building real-world applications with Node JS, Express, MongoDB, Jest, and more",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail: "/nodejs.png", //Link to the course thumbnail
    duration: "4 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "A basic understanding of JavaScript (variables, functions, objects, arrays, if statements)",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Instaling and Exploring Node.js",
        content: "Overview of Nodejs, Installing  Nodejs and vscode setup.",
      },
      {
        week: 2,
        topic: "Node.js Module System",
        content: `Modules give you access to tools for working with the file system,
           making http requests, creating web servers, and more!`,
      },
      {
        week: 3,
        topic: "Asynchronus Node.js",
        content: `Making http requests,callback abstractions and callback chaining`,
      },
      {
        week: 4,
        topic: "API Authentication and Security",
        content: `Securely storing passwords,generating authentication tokens.And Logging out`,
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 4, // Unique identifier for the course
    name: "Machine Learning - From Basics to Advanced",
    instructor: "Ilya sutskever", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail: "/machine_learning.png", //Link to the course thumbnail
    duration: "4 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Basic knowledge of scripting and programming",
      "Basic knowledge of python programming",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to machine learning and data wrangling",
        content: "Essential Numpy and essential Pandas for ML with black box.",
      },
      {
        week: 2,
        topic: "Linear Models,Trees and Preprocessing",
        content:
          "Linear Models for regression and classification with decision trees.",
      },
      {
        week: 3,
        topic: "Model Evaluation,feature Selection & Piepelining ",
        content:
          "Feature selection techniquq in ml with composite estimators using pipelines.",
      },
      {
        week: 4,
        topic: "Bays,Nearest Neighbours & Clustering",
        content: "Native Bayes with introduction to nearest Neighbours.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 5, // Unique identifier for the course
    name: "Complete python Bootcamp",
    instructor: "Jose porilla", // Name of the course instructor
    description:
      "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail: "/python.png", //Link to the course thumbnail
    duration: "6 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Python and setup",
        content: "Command line basics ,How to run python code ",
      },
      {
        week: 2,
        topic: "Python object and data structure basics",
        content: "Numbers,Assignment variable,strings,print formatting",
      },
      {
        week: 3,
        topic: "Methods and functions",
        content:
          "Introduction to functions,methods and their interactions with examples.",
      },
      {
        week: 4,
        topic: "Modules ,Packages and Decorators",
        content: "Pip install and Pypi and Decorators explained.",
      },
      {
        week: 5,
        topic: "Generatos and Advanced Pythong modules",
        content:
          "Generators Homework overview with solutions and datetime,math and Random Modules expalined.",
      },
      {
        week: 6,
        topic: "Images,Pdf and Emails",
        content: "How to work with images,PDF and emails in python.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 6, // Unique identifier for the course
    name: "The complete Java Development Bootcamp",
    instructor: "Ryan slim and Jose Protilla", // Name of the course instructor
    description:
      "Become an Experienced Java Developer with Just One Course. Fully Updated with Coding Challenges!",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail: "/java.png", //Link to the course thumbnail
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM.",
    location: "Online.",
    prerequisites: ["A commitment to learn Java."],
    syllabus: [
      {
        week: 1,
        topic: "Variables , Booleans and Conditional.",
        content:
          "A brieft introduction with informadion about variables and booleans in Java.",
      },
      {
        week: 2,
        topic: "function , Loops, Arrays, and Immuatables Objects. ",
        content: "Introduction and Uses of functions,loops ... with examples .",
      },
      {
        week: 3,
        topic: "Exception Handling , map collections,package and import.",
        content:
          "A brieft introduction with informadion about variables and booleans in Java",
      },
      {
        week: 4,
        topic: "function , Loops, Arrays, and Immuatables Objects ",
        content: "Introduction and Uses of functions,loops with examples.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Ryan slim and Jose Protilla",
        email: "",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
];
export default courses;
