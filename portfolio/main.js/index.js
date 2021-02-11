let homeslide = document.querySelectorAll(".home")
let sliderwrapper = document.querySelector(".slide")
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn7");
let btn3 = document.querySelector(".btn6");
let listItem = document.querySelectorAll(".link_item")
const subTitle = document.querySelector(".subtitle")
let animate_btn = document.querySelector(".animate_btn")
const menu = document.querySelector(".menu_icon")
let container=document.querySelector(".nav_container")

const targetObserver = document.querySelector(".observe")
let currentpage = 0;
let currentState = 0;
let check = true;
console.log(btn)
 
 


//show navigation menu
function showMenu() {
    currentState++
    if (currentState >= 2) {
        currentState = 0;
    }

    if (currentState === 1) {
          container.classList.add("nav_active")
    } else {
           container.classList.remove("nav_active")
    }
    
}


menu.addEventListener("click",showMenu)


//observer for Header positioning


const option = {
 
 
   threshold:[.7]
    
}

let headerPosition = (e, t) => {
  
    
  
    if (e[0].isIntersecting) {
        document.querySelector(".navigation_button").classList.add("position")
     check= true
    } else {
        document.querySelector(".navigation_button").classList.remove("position")
        check = false
    }
           
   
   console.log(check)
    console.log(e,t)
}

let observer = new IntersectionObserver(headerPosition, option)

observer.observe(targetObserver )




function setPosition(sections) {

    sections.forEach((item, index) => {
        item.style.transform = `translateX(${index * 100}%)`

    })


}
setPosition(homeslide)

function showslide(parentslider, page) {

    parentslider.style.left = `-${page * 100}%`
    

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

//btn event handler

btn.addEventListener("click", increaseSlide)

//animate button

setInterval(() => {
    animate_btn.classList.toggle("shift");
},1000)

// btn2.addEventListener("click", increaseSlide)
// btn3.addEventListener("click", decreaseSlide)

//nav checkfuntion1....

function checkNavLink1() {
    listItem[0].className = "link_item active"
    listItem.forEach((item) => {
    item.addEventListener("click",(e) => {

        listItem.forEach((item,index) => {
            item.classList.remove("active")
          
        })
        e.target.classList.add("active") 
        let text = e.target.textContent

        generateSubTitle(text, creatSubTitle);
    })
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

