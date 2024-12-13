// Wait for the DOM to load chat gpt aded this to help it funtion
document.addEventListener("DOMContentLoaded", () => {
    // Handle the submission of a new controversial moment
    const submissionForm = document.getElementById("submission-form");
    submissionForm.addEventListener("submit", (event) => {
        const momentInput = document.getElementById("moment");
        const newMoment = momentInput.value.trim();

        if (newMoment) {
            alert(`moment submitted`);
            momentInput.value = ""; 
        } else {
            alert("nothing submitted");
        }
    });

   //chatgpt helped me select classes in bulk to shorten code
    const pollButtons = document.querySelectorAll(".poll-btn");
    const pollResults = document.getElementById("poll-results");

    const pollCounts = {
        "Maradona's Hand of God": 0,
        "2020 Ballon d'Or Cancellation": 0,
        "Neymar's 2015 Ballon d'Or Snub": 0,
        "Mo Salah Puskas Goal": 0,
    };
//https://youtu.be/l0VuhtmLl1I?si=WCEEoPT-nOUZ9sI9 this helped me understand data-option
    pollButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const option = button.getAttribute("data-option");
            pollCounts[option] += 1;

            displayPollResults();
        });
    });
//https://youtu.be/EhS-MJ5EFxc?si=V42xoO-k8oWGbGxP, this video helped me understand poles
    function displayPollResults() {
        pollResults.innerHTML = "<h3>Poll Results:</h3>";
        for (const [option, count] of Object.entries(pollCounts)) {
            const result = document.createElement("p");
            result.textContent = `${option}: ${count} vote(s)`;
            pollResults.appendChild(result);
        }
    }
});
