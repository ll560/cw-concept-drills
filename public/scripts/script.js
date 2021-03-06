// Write conditionals for the following concepts and scenarios:

// CONCEPT 1: Logical Operators
console.log(`Concept 1: Logical Operators

`);
// Create a variable called studentGrade and set it to equal a number between 1 and 100
// Using a condtional statement with logical operators, print the student's letter grade in a message in the console based on what value is held in the variable studentGrade. This variable represents a student's percentage in the class. 
// Example: console.log(`The student's grade is: A`)
// Test out various condtions by changing the studentGrade variable and refreshing your browswer with the console open. 

// WHAT TO PRINT:
// 90-100 prints A
// 80-89 prints B
// 70-79 prints C
// 60-69 prints D
// 0-59 prints F

let studentGrade;
score = 95;

if (score > 1 && 59 > score){
    studentGrade= "F";
    console.log(`The student's score is ${studentGrade}`);
} else if
    (score > 60 && 69 > score){
    studentGrade="D";
    console.log(`The student's score is ${studentGrade}`);
} else if 
    (score > 70 && 79 > score){   
    studentGrade="C";
    console.log(`The student's score is ${studentGrade}`);
} else if 
    (score > 80 && 89 > score){
    studentGrade ="B";
    console.log(`The student's score is ${studentGrade}`);
} else 
    (score > 90 && 100 > score) //no curly brackts needed for else
    studentGrade = "A";
    console.log(`The student's score is ${studentGrade}`);


    




// CONCEPT 2: Nesting Conditionals
console.log(`



Concept 2: Nesting Conditionals

`);
// Use the conditional statement you wrote for Scenario 1 and expand it based on the following list of what to print. 
// Copy your conditional statement from Scenario 1 into Scenario 2 before proceeding. 
// Hint: Nest conditional statements by putting them in place of the original console.log lines of code from the Concept 1 scenario. 
// Test out various condtions by changing the studentGrade variable and refreshing your browswer with the console open. 

// WHAT TO PRINT:
// 98-100 prints A+
// 94-97 prints A
// 90-93 prints A-

// 88-89 prints B+
// 84-87 prints B
// 80-83 prints B-

// 78-79 prints C+
// 74-77 prints C
// 70-73 prints C-

// 68-69 prints D+
// 64-67 prints D
// 60-63 prints D-

// 0-59 prints F


score = 85

if (score > 98 && 100 > score){
    studentGrade = "A+";
    console.log(`The student's score is ${studentGrade}`);
    if (score > 94 && 97 > score){
        studentGrade = "A";
        console.log(`The student's score is ${studentGrade}`);
        if (score > 90 && 93 > score)
            studentGrade = "A-";
            console.log(`The student's score is ${studentGrade}`);
} else if
    (score > 88 &&  89 > score)
        studentGrade = "B+";
        console.log(`The student's score is ${studentGrade}`);
        if (score > 84 && 87 > score){
            studentGrade = "B";
            console.log(`The student's score is ${studentGrade}`);
            }if (score > 80 && 83 > score){
                studentGrade = "B-";
                console.log(`The student's score is ${studentGrade}`);
} else if
    (score > 78 && 79 > score)
    studentGrade = "C+";
    console.log(`The student's score is ${studentGrade}`);
        }if (score > 74 && 77 > score){
            studentGrade = "C";
            console.log(`The student's score is ${studentGrade}`);
            }if (score > 70 && 73 > score){
                studentGrade = "C-";
                console.log(`The student's score is ${studentGrade}`);
} else if
    (score > 68 && 69 > score)
    studentGrade = "D+";
    console.log(`The student's score is ${studentGrade}`);
        if (score > 64 && 67 > score){
            studentGrade = "D";
            console.log(`The student's score is ${studentGrade}`);
            }if (score > 60 && 63 > score){
                studentGrade = "D-";
                console.log(`The student's score is ${studentGrade}`)
} else {
    (score > 59)
    studentGrade = "F";
    console.log(`The student's score is ${studentGrade}`)
}



// CONCEPT 3: Ternary Operator
console.log(`



Concept 3: Ternary Operator

`);
// Write a conditional statement using the ternary operator for the following 2 scenarios:

// Create a variable called timeSinceOil and set it equal to a number that represents how many months it's been since a vehicle has had an oil change. 
//Write a conditional using the ternary operator to console.log(`No oil change needed.`); if timeSinceOil is less than 6. If timeSinceOil is 6 or more, console.log(`Get an oil change.`);
// Test out several conditions by changing the timeSince Oil variable and refreshing your browswer with the console open. 

let timeSinceOil = 9;
let timeForOilChange = timeSinceOil <= 6 ? console.log (`No oil change needed.`) : console.log(`Get an oil change.`);



// Create a variable called stopLight and set it equal to either "green", "yellow", or "red". 
// Write a conditional using the ternary operator to console.log(`Go!`); if stopLight is equal to "green" or "yellow", and console.log(`Stop!`); if stopLight is equal to "red".
// Test out all three conditions by changing the stopLight variable and refreshing your browswer with the console open. 


let stopLight ="green";
let carCommand = stopLight = "green" || "yellow" ? console.log(`Go!`) : console.log("Stop!");





// CONCEPT 4: Switch Statements
console.log(`



Concept 4: Switch Statements

`);
// Write switch statements for the following 2 scenarios. 

// Create a variable called dayNum and set it equal to a whole number 1-7.
// Write a switch statement to console.log the messages provided below depending on what dayNum is. 
// Test out all possible conditions by changing the dayNum variable and refreshing your browswer with the console open. 

// What to print:
// 1 prints `Happy Monday!`
// 2 prints `Happy Tuesday!`
// 3 prints `Happy Wednesday!`
// 4 prints `Happy Thursday!`
// 5 prints `Happy Friday!`
// 6 prints `Happy Saturday!`
// 7 prints `Happy Sunday!`
// anything else prints `Not a valid day of the week.`

let dayNum = '2';

switch (dayNum){
    case '1':
        console.log(`Happy Monday!`);
        break;
    case '2':
        console.log(`Happy Tuesday!`);
        break;
    case '3':
        console.log(`Happy Wednesday!`);
        break;
    case '4':
        console.log(`Happy Thursday!`);
        break;
    case '5':
        console.log(`Happy Friday!`);
        break;
    case '6':
        console.log(`Happy Saturday!`);
    case '7':
        console.log(`Happy Friday!`);
}




// Create a variable called month and set it equal to a month in the year ("January", "February", "March", etc.).
// Write a switch statement to console.log the messages provided below depending on what month is. 
// Test out all possible conditions by changing the month variable and refreshing your browswer with the console open. 

// What to print:
// if month = "January", "March", "May", "July", "August", "October", or "December" print: `${month} has 31 days.`
// if month = "April", "June", "September", or "November" print: `${month} has 30 days.`
// if month = "February" print `${month} has 28 or 29 days.`
// if the month doesn't match any of those, print `${month} is not a valid month. Reset the variable and try again.`

let month = 'May';

switch(month){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        console.log(`${month} has 31 days.`);
        break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(`${month} has 30 days.`);
        break;




}




// Upload your work to GitHub and submit the repo link in Moodle. 