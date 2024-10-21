// welcome navigation
document.addEventListener("DOMContentLoaded", function () {

    // goes to welcome page by clicking the logo
    document.getElementById("logo").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "../html/welcome.html";
    });

    // goes to signin by clicking get started
    document.getElementById("get-started").addEventListener("click", function(event) {
        event.preventDefault();  
        window.location.href = "../html/signin.html";
    });

    // goes to signin
    document.getElementById("login").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "../html/signin.html";
    });

    // goes to signup
    document.getElementById("signup").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "../html/signup.html";
    });
});

// Home navigation
document.addEventListener("DOMContentLoaded", function () {

    // goes to quizzes-tab
    document.getElementById("quizzes-tab").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "../html/sidebars/sd_quizzes.html";
    });

    // goes to folders-tab
    document.getElementById("folders-tab").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "../html/sidebars/sd_folders.html";
    });

    // goes to progress-tab
    document.getElementById("progress-tab").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "../html/sidebars/sd_progress.html";
    });

    // goes to scores-tab
    document.getElementById("scores-tab").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "../html/sidebars/sd_scores.html";
    });
});

// Quizzes navigation
document.addEventListener("DOMContentLoaded", function () {

    // goes to home-tab
    document.getElementById("home-tab").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "../homepage.html";
    });

    // goes to folders-tab
    document.getElementById("folders-tab").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "../sidebars/sd_folders.html";
    });

    // goes to progress-tab
    document.getElementById("progress-tab").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "../sidebars/sd_progress.html";
    });

    // goes to scores-tab
    document.getElementById("scores-tab").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "../sidebars/sd_scores.html";
    });
});


