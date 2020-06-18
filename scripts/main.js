const subMenu = document.querySelector(".menu-sub")
const subMenuStyles = getComputedStyle(subMenu)

console.log(subMenuStyles)

console.log(subMenuStyles.visibility)

// if (subMenuStyles.visibility === "hidden") {
//     console.log("Sub menu is now visible")
// }

const overlay = document.createElement("div")
overlay.setAttribute("class", "overlay")

const linkOne = document.querySelector("#link-one")

// linkOne.addEventListener("mouseover", function (e) {
//     console.log("mouse over")
//     document.querySelector("body").appendChild(overlay)
// })

subMenu.addEventListener("mouseleave", function (e) {
    console.log("mouse leave")
})