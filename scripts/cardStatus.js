let statusLists = document.querySelectorAll(".status-list");
let statusNOW = document.querySelector(".status-now");
let statusDROPDOWN = document.querySelector(".status-dropdown");
let statusBOX = document.querySelector(".status");

// ON OFF DROPDOWN STATUS
statusBOX.addEventListener("click", () => {
     statusDROPDOWN.style.display = "flex";
});

// STATUS LISTS
statusLists.forEach(statusList => {
    statusList.addEventListener("click", (event) => {
        console.log(event.target.id);
        if(event.target.id == "status-list-1") {
            statusNOW.innerHTML = "กำลังดำเนินการ";
            statusNOW.style.color = "yellow";
            console.log("เปลี่ยนสถานะการทำงานเรียบร้อย");
            statusDROPDOWN.style.display = "none";
        } else if(event.target.id == "status-list-2"){
            statusNOW.innerHTML = "ติดปัญหา";
            statusNOW.style.color = "red";
            console.log("เปลี่ยนสถานะการทำงานเรียบร้อย");
            statusDROPDOWN.style.display = "none";
        } else if(event.target.id == "status-list-3") {
            statusNOW.innerHTML = "เสร็จ";
            statusNOW.style.color = "green";
            console.log("เปลี่ยนสถานะการทำงานเรียบร้อย");
            statusDROPDOWN.style.display = "none";
        }

        statusDROPDOWN.classList.remove("active");
    });
})