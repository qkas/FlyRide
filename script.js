const links = document.querySelectorAll(".sivut a");

const currentURL = window.location.href;

links.forEach(link => {
if (link.href === currentURL) {
    link.classList.add("active");
}
});