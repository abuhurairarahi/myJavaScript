//once you reload the page all the values will be set as initialized

// global-variable
const goal = 20;
let studyHours = 0;
let SubjectName = [];
let countStudySeason = 0;
let feedback = "";
let average = 0;

// main-function
function countStudyHours(event) {

    event.preventDefault();
    // it prevents the reload after one form submission

    let inputsubjectName = document.getElementById('subject-Name').value; //"DSA"
    let inputsubjectHours = document.getElementById('study-Hours').value; //"3"

    studyHours += Number(inputsubjectHours); //"3" --> 3; "4.5" ---> 4.5
    countStudySeason++;

    average = studyHours / countStudySeason;
    SubjectName.push(inputsubjectName);


    //feedback
    if (studyHours >= 0 && studyHours <= 5) {
        feedback = "Start studying regularly!";
    } else if (studyHours >= 6 && studyHours <= 12) {
        feedback = "Good progress!";
    } else if (studyHours >= 13 && studyHours <= 19) {
        feedback = "Almost ready!";
    } else if (studyHours >= 20) {
        feedback = "Weekly goal reached!";
    } else if (countStudySeason > 7 && studyHours < 20) {
        feedback = "Increase your study time";
    } else {
        feedback = "Invalid";
    }
}

// display-function
function display() {
    document.getElementById('total-study-hours').innerHTML = "Total Study Hours: " + studyHours;
    document.getElementById('average-study-hours').innerHTML = "Average Study Hours: " + average;
    document.getElementById('subject-studied').innerHTML = `Subjects: ${SubjectName.join(", ")}`;
    document.getElementById('study-feedback').innerHTML = "FeedBack: " + feedback;
}

// reset-function
function reset() {
    let studyHours = 0;
    let SubjectName = [];
    let countStudySeason = 0;
    let feedback = "";
    let average = 0;

    document.getElementById('total-study-hours').innerHTML = "Total Study Hours: " + studyHours;
    document.getElementById('average-study-hours').innerHTML = "Average Study Hours: " + average;
    document.getElementById('subject-studied').innerHTML = `Subjects: ${SubjectName.join(", ")}`;
    document.getElementById('study-feedback').innerHTML = "FeedBack: " + feedback;
}