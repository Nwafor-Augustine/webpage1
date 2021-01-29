let homeslide = document.querySelectorAll(".home")
let sliderwrapper = document.querySelector(".slide")
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn7");
let btn3 = document.querySelector(".btn6");
let links = document.querySelector(".link")
let listItem = document.querySelectorAll(".link_item")
let links2 = document.querySelector(".link2")
let listItem2 = document.querySelectorAll(".link_item2")
const subTitle = document.querySelector(".subtitle")
let currentpage = 0;
console.log(listItem)
console.log(btn)
console.log()


// position sliders

function setPosition(sections) {

    sections.forEach((item, index) => {
        console.log(index)
        item.style.transform = `translateX(${index * 100}%)`

    })


}
setPosition(homeslide)

function showslide(parentslider, page) {

    parentslider.style.left = `-${page * 100}%`
    return homeslide[page].className;

}




// map number of dot

// dot(generateDot(), 4)

// function dot(creat, number) {
//     for (let i = 0; i < number; i++) {
//         creat()
//     }

// }

//generate dots design
// function generateDot() {
//     return function creatDot() {
//         let dotHolder = document.querySelector(".dots")
//         let dot = document.createElement("div")
//         dot.className = "dot"
//         dotHolder.appendChild(dot)
//     }

// }

function increaseSlide() {
    currentpage++
    if (currentpage === homeslide.length) {
        currentpage = 0;
    }
    let check = showslide(sliderwrapper, currentpage)
}


function decreaseSlide() {
    currentpage--
    if (currentpage === homeslide.length) {
        currentpage = 0;
    }
    let check = showslide(sliderwrapper, currentpage)
}


btn.addEventListener("click", increaseSlide)
// btn2.addEventListener("click", increaseSlide)
// btn3.addEventListener("click", decreaseSlide)

//nav checkfuntion1....

function checkNavLink1() {
    listItem[0].className = "link_item active"

    links.addEventListener("click", (e) => {

        listItem.forEach((item,index) => {
            item.classList.remove("active")
          
        })
        e.target.classList.add("active") 
        let text = e.target.textContent

        generateSubTitle(text, creatSubTitle);
    })
}
checkNavLink1()
//nav checkfuntion2....

// function checkNavLink2() {
//     listItem2[2].className = " link active"
//     links2.addEventListener("click", (e) => {

//         listItem2.forEach((item) => {
//             item.classList.remove("active")

//         })

//         e.target.className = " link active"
//         let text = e.target.textContent

//         generateSubTitle(text, creatSubTitle);
//     })

// }
// checkNavLink2()



// unfinish function
function generateSubTitle(linkText, title) {

    if (linkText === "Home") {
        // subTitle.removeChild()
        title(linkText)
    }


}


function creatSubTitle(link) {
    subTitle.classList.add("active")
    let subTitleEle = document.createElement("div")
    subTitleEle.className = "mappingtext"
    subTitleEle.textContent = `${link} >`;
    subTitle.appendChild(subTitleEle)

}

