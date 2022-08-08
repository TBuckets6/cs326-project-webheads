const normalLevelCoding = [
    {
        question1: "Question 1: What are the correct data types for JavaScript?",
        answers1: [ 
                   {a: "number, string, boolean, null, undefined, object", correct: true}, 
                   {b: "int, string, boolean, float", correct: false }, 
                   {c: "string, boolean, array", correct: false}, 
                   {d: "int, double, string, boolean, object"}
                ]
    },
        
    {
        question2: "Question 2: (JavaScript) What is the output of this code?\n\n"
            + "function f(){ return 3; }\n\n" 
            + "f();",
        answers2: [
                {a: "3", correct: false},
                {b: "undefined", correct: false},
                {c: "No output (the console is blank)", correct: true},
                {d: "33", correct: false}
        ]

    },

    {
        question3: "Question 3: In HTML, which tag start and end tag must JavaScript go between?",
        answers3: [
                {a: "<html> </html>", correct: false},
                {b: "<script> </script>", correct: true},
                {c: "<javascript> </javascript>", correct: false},
                {d: "<body> </body>", correct: false}
        ]

    }



]

const hardLevelCoding = [
    {

    }
]

export { normalLevelCoding, hardLevelCoding };