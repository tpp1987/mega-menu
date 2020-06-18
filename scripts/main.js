const menuMain = document.querySelector(".menu-main")

const linkOne = document.querySelector("#link-one")
const linkTwo = document.querySelector("#link-two")
const linkThree = document.querySelector("#link-three")
const linkFour = document.querySelector("#link-four")

const subOne = document.querySelector("#sub-one")
const subTwo = document.querySelector("#sub-two")
const subThree = document.querySelector("#sub-three")
const subFour = document.querySelector("#sub-four")

const overlay = document.querySelector(".overlay")

linkOne.addEventListener("mouseover", function (e) {
    overlay.classList.replace("hidden", "visible")
})

subOne.addEventListener("mouseleave", function (e) {
    overlay.classList.replace("visible", "hidden")
})

linkTwo.addEventListener("mouseover", function (e) {
    overlay.classList.replace("hidden", "visible")
})

subTwo.addEventListener("mouseleave", function (e) {
    overlay.classList.replace("visible", "hidden")
})

linkThree.addEventListener("mouseover", function (e) {
    overlay.classList.replace("hidden", "visible")
})

subThree.addEventListener("mouseleave", function (e) {
    overlay.classList.replace("visible", "hidden")
})

linkFour.addEventListener("mouseover", function (e) {
    overlay.classList.replace("hidden", "visible")
})

subFour.addEventListener("mouseleave", function (e) {
    overlay.classList.replace("visible", "hidden")
})

document.querySelector("html").addEventListener("mouseleave", function (e) {
    overlay.classList.replace("visible", "hidden")
})

menuMain.addEventListener("mouseleave", function (e) {
    overlay.classList.replace("visible", "hidden")
})