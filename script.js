/* Tietokoneelle */
const dLinks = document.querySelectorAll(".sivut a");
const dCurrentURL = window.location.href;

dLinks.forEach(link => {
if (link.href === dCurrentURL) {
    link.classList.add("active");
}
});

/* Mobiililaitteille */
const mLinks = document.querySelectorAll("#dropdown-sivut a");
const mCurrentURL = window.location.href;

mLinks.forEach(link => {
if (link.href === mCurrentURL) {
    link.classList.add("active");
}
});

/* Dropdown menu mobiililaitteille */
function dropdown() {
    var x = document.getElementById("dropdown-sivut");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}