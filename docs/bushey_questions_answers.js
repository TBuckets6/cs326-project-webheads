const normalLevelCoding = [
    {
        question1: "Question 1: What are the correct data types for JavaScript?",
        answers1: [ 
                   {0: "number, string, boolean, null, undefined, object", correct: true}, 
                   {1: "int, string, boolean, float", correct: false }, 
                   {2: "string, boolean, array", correct: false}, 
                   {3: "int, double, string, boolean, object"}
                ]
    },
        
    {
        question2: "Question 2: (JavaScript) What is the output of this code?\n\n"
            + "function f(){ return 3; }\n\n" 
            + "f();",
        answers2: [
                {0: "3", correct: false},
                {1: "undefined", correct: false},
                {2: "No output (the console is blank)", correct: true},
                {3: "33", correct: false}
        ]

    },

    {
        question3: "Question 3: In HTML, which tag start and end tag must JavaScript go between?",
        answers3: [
                {0: "<html> </html>", correct: false},
                {1: "<script> </script>", correct: true},
                {2: "<javascript> </javascript>", correct: false},
                {3: "<body> </body>", correct: false}
        ]

    }



]

const hardLevelCoding = [
    {

    }
]

export { normalLevelCoding, hardLevelCoding };