// camelCasing: btnShowHide
// PascalCasing: BtnShowHide
// kebab-casing: btn-show-hide
// snake_casing: btn_show_hide
// uppercase_snake_casing: BTN_SHOW_HIDE

// DOM = Document Object Model
// DOM traversal
// DOM manipulation

let isShowing = true
const btnShowHide = document.getElementById("btn-show-hide")
const imgCat = document.getElementById("img-cat")
const divContainerElement = document.getElementById("container")

function toggle() {
    console.log("Button was clicked!")
    console.log("isShowing:", isShowing)

    isShowing = !isShowing

    if (isShowing) {
        imgCat.style.display = "inline" // different options: block, inline, none
        btnShowHide.innerText = "Hide!"
        console.log("Show picture")
    } else {
        imgCat.style.display = "none" // different options: block, inline, none
        btnShowHide.innerText = "Show!"
        console.log("Hide picture")
    }
    // console.log(btnShowHide)
    // console.log(imgCat)
}


// ternary operator -> ? :
function toggle2() {
    isShowing = !isShowing
    imgCat.style.display = isShowing ? "inline" : "none"
    btnShowHide.innerText = isShowing ? "Hide!" : "Show!"
}

function hideContainer() {
    divContainerElement.style.display = divContainerElement.style.display == "none" ? "block" : "none"
}