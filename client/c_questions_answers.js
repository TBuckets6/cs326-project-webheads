// This file holds the questions and answers for each quiz the user can take.

const normalLevelCoding = [
    {
        question1: "Question 1: What are the correct data types for JavaScript?",
        answers1: [ 
                   {0: "number, string, boolean, null, undefined, object", /*correct: true*/}, 
                   {1: "int, string, boolean, float", /*correct: false*/ }, 
                   {2: "string, boolean, array", /*correct: false*/}, 
                   {3: "int, double, string, boolean, object"/*correct: false*/}
                ],
        correct: 0
    },
    
    {
        question2: "Question 2: (JavaScript) What is the output of this code?\n\n"
            + "function f(){ return 3; }"
            + "f();",
        answers2: [
                {0: "3", correct: false},
                {1: "undefined", correct: false},
                {2: "No output (the console is blank)", correct: true},
                {3: "33", correct: false}
        ],
        correct: 2

    },

    {
        question3: "Question 3: In HTML, which tag start and end tag must JavaScript go between?",
        answers3: [
                {0: "<html> </html>", correct: false},
                {1: "<script> </script>", correct: true},
                {2: "<javascript> </javascript>", correct: false},
                {3: "<body> </body>", correct: false}
        ],
        correct: 1

    }



]

const hardLevelCoding = [
    {
        question1: "Question 1: What is the difference between array.filter and array.map?",
        answers1: [
                {0: "Filter pops elements off the array and returns that array. Map creates a new array"},
                {1: "Filter creates a new array by filtering out certain elements of the old array. Map filters out the elements and returns the same array."},
                {2: "Filter creates a new array by filtering out certain elements of the old array. Map creates a new array based off the old array with certain adjustments."},
                {3: "Filter filters out an array and returns a string. Map filters out an array and returns a new array."}
        ],
        correct: 2
    },

    {
        question2: "Question 2: Which statement is true?",
        answers2: [
                {0: "The class name and the file name must be the same in Java. In JavaScript, a file can be named whatever as long as it has the .js extension."},
                {1: "Only classes can be used in Java"},
                {2: "JS has 'int' type while Java only uses 'number' type"},
                {3: "JavaScript is mostly used for Android apps"}
        ],
        correct: 1
    },

    {
        question3: "Question 3: (Github) Which statement is false?",
        answers3: [
                {0: "The 'git push' command will save the commit to the local computer."},
                {1: "The 'git push' command will save the commit to a remote repository"},
                {2: "The 'git add .' is another command that will change the remote repository"},
                {3: "Github desktop is required to use Git"},
        ],
        correct: 1
    }
]

const normalLevelMath = [
    {
        question1: "Question 1: What is the correct order of opreations?",
        answers1: [
            {0: "DMPEAS"},
            {1: "PEMDAS"},
            {2: "EPMDAS"},
            {3: "PEMDSA"},
        ],
        correct: 1
    },

    {
        question2: "Question 2: What is the correct distribution of 3(x+1)?",
        answers2: [
            {0: "4"},
            {1: "3"},
            {2: "3x + 3"},
            {3: "3x + 1"},
        ],
        correct: 2
    },

    {
        question3: "Question 3: What does 4(x + 3x), x = 2, evaluate to?",
        answers3: [
            {0: "7"},
            {1: "12"},
            {2: "24"},
            {3: "32"},
        ],
        correct: 3
    }
    
]

const hardLevelMath = [
    {
        question1: "Question 1: What does 4(3x + 3^(x) - 31) evaluate to?",
        answers1: [
            {0: "1"},
            {1: "32"},
            {2: "64"},
            {3: "-64"},
        ],
        correct: 3
    },

    {
        question2: "Question 2: What is the derivative of 3x?",
        answers2: [
            {0: "0"},
            {1: "3x^2"},
            {2: "3"},
            {3: "3x"},
        ],
        correct: 2
    },

    {
        question3: "Question 3: What does 5! evaluate to?",
        answers3: [
            {0: "0"},
            {1: "5"},
            {2: "120"},
            {3: "60"},
        ],
        correct: 2
    },
    
]

const normalLevelBball = [
    {
        question1: "Question 1: How many points is a free throw worth?",
        answers1: [
            {0: "1"},
            {1: "2"},
            {2: "7"},
            {3: "3"},
        ],
        correct: 0
    },

    {
        question2: "Question 2: How many steps can you take once you have picked up your dribble?",
        answers2: [
            {0: "3"},
            {1: "0"},
            {2: "2"},
            {3: "1"},
        ],
        correct: 2
    },

    {
        question3: "Question 3: When does an 'offensive foul' occur?",
        answers3: [
            {0: "When the offensive player collides with a defensive player. The defender must be stationary, have both feet flat on the ground, and be facing the offensive player"},
            {1: "When a defender charges the opponent player who has the ball."},
            {2: "When the defender grabs the ball after it has been shot by another player and it's trajectory is downward."},
            {3: "When the offensive player steps over the freethrow line while shooting freethrows."},
        ],
        correct: 0
    },
    
]

const hardLevelBball = [
    {
        question1: "Question 1: Who currently has the most points in NBA history?",
        answers1: [
            {0: "Michael Jordan"},
            {1: "Wilt Chamberlain"},
            {2: "Kareem Abdul-Jabbar"},
            {3: "Larry Bird"},
        ],
        correct: 2
    },

    {
        question2: "Question 2: What 37 year old NBA star currently ranks 2nd in points all time",
        answers2: [
            {0: "Kevin Durant"},
            {1: "Steph Curry"},
            {2: "Lebron James"},
            {3: "Giannis Antetokounmpo"},
        ],
        correct: 2
    },

    {
        question3: "Question 3: What year was LeBron James drafted into the NBA?",
        answers3: [
            {0: "2004"},
            {1: "2010"},
            {2: "2003"},
            {3: "2002"},
        ],
        correct: 2
    },
    
]

export { normalLevelCoding, hardLevelCoding, normalLevelMath, hardLevelMath, normalLevelBball, hardLevelBball };