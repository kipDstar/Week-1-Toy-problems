let marks = Number(prompt("Enter the marks of the students: ")); 
// Validate user input with a loop until marks are between 0 and 100.
do {
    marks = Number(prompt("Enter the marks of the student (between 0 and 100): "));
    if (!(marks >= 0 && marks <= 100)) {
        alert("Please enter a valid value between 0 and 100.");
    }
} while (!(marks >= 0 && marks <= 100));

// Function to determine and display the grade based on marks.
function studentMarkAwarded(marks) {
    if (marks > 79) {
        console.log("Grade: A");
    } else if (marks >= 60) {
        console.log("Grade: B");
    } else if (marks >= 49) {
        console.log("Grade: C");
    } else if (marks >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }
}

// Call the function with the validated marks.
studentMarkAwarded(marks);


