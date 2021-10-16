let navLinks = document.getElementsByClassName("navLink")
let checkBox = document.getElementById("check")
for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
        checkBox.checked = false
    })
}
