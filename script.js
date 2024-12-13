

    let yesCount = 0;
let noCount = 0;
//chat gpt reminded me how to use event listeners//
document.getElementById("yes-btn").addEventListener("click", () => {
yesCount++;
document.getElementById("yes-count").textContent = yesCount;
});
document.getElementById("no-btn").addEventListener("click", () => {
noCount++;
document.getElementById("no-count").textContent = noCount;
});



