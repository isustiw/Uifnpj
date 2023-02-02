const activePage = window.location.pathname;
// console.log(activePage);
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    // console.log(link);
    if(link.href.includes(`${activePage}`)) {
        link.classList.add("active-page");
        // console.log(link);
    }
});