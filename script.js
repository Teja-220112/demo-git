/* ========= VARIABLES ========= */
let platformName = "Skill Bridge";
let studentName = "";

/* ========= OBJECT WITH METHODS ========= */
const student = {
    enrolled: 0,
    completed: 0,

    enrollCourse: function () {
        this.enrolled++;
        this.updateDashboard();
    },

    completeCourse: function () {
        if (this.enrolled > this.completed) {
            this.completed++;
            this.updateDashboard();
        } else {
            alert("No ongoing courses to complete.");
        }
    },

    updateDashboard: function () {
        document.getElementById("enrolledCount").innerText = this.enrolled;
        document.getElementById("completedCount").innerText = this.completed;
        document.getElementById("ongoingCount").innerText =
            this.enrolled - this.completed;
    }
};

/* ========= FUNCTIONS ========= */
function startLearning() {
    alert("Welcome to " + platformName);

    let confirmEnroll = confirm("Do you want to enroll in a course?");
    if (confirmEnroll) {
        studentName = prompt("Enter your name:");
        if (studentName) {
            student.enrollCourse();
            alert("Enrollment successful! Welcome, " + studentName);
        }
    } else {
        alert("You can explore courses anytime.");
    }
}

/* ========= EVENTS ========= */
document.getElementById("exploreBtn")
    .addEventListener("click", startLearning);

document.getElementById("completeBtn")
    .addEventListener("click", function () {
        student.completeCourse();
    });

/* ========= PAGE LOAD ========= */
window.addEventListener("load", function () {
    student.updateDashboard();
});
