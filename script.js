const links = document.querySelectorAll(".sivut a");

const currentURL = window.location.href;

links.forEach(link => {
if (link.href === currentURL) {
    link.classList.add("active");
}
});

function dropdown() {
    var x = document.getElementById("dropdown-sivut");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}