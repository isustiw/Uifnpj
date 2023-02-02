let displayMonth = document.querySelector(".show-month");
let monthDROPDOWN = document.querySelector(".month-dropdown");
let monthLists = document.querySelectorAll(".month-dropdown li");
let monthBOX = document.querySelector(".m-month");

// monthBOX.addEventListener("", (event) => {
//     console.log(event.target);
//     monthDROPDOWN.style.display = "block";
// });

function onMonthdropdown() {
    monthDROPDOWN.style.display = "block";
    monthDROPDOWN.style.zIndex = "99";
}
function offMonthdropdown() {
    monthDROPDOWN.style.display = "none";
}

monthLists.forEach(monthLIST => {
    monthLIST.addEventListener("click", (event) => {
        console.log(event.target.id);

        if(event.target.id === "7") {
            displayMonth.innerHTML = "สัปดาห์นี้";
            offMonthdropdown();
        } else if (event.target.id === "31") {
            displayMonth.innerHTML = "เดือนนี้";
            offMonthdropdown();
        }
    });
});