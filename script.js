
let nav = document.getElementById('nav');
let x = document.getElementById('x');
let hamburger = document.getElementById('hamburger');
let dropdownItems = document.getElementsByClassName('category-items');
let lightArrows = document.getElementsByClassName('light');
let darkArrows = document.getElementsByClassName('dark')


hamburger.addEventListener ("click", function(){
    hamburgerToggle(0)
});
x.addEventListener ("click", function(){
    hamburgerToggle(1)
})

function hamburgerToggle(state){

    if (state===0){
        nav.style.display = "block"
        hamburger.style.display = "none"
        x.style.display = "inline-block"
    }

    if (state===1){
        nav.style.display = "none"
        hamburger.style.display = "inline-block"
        x.style.display = "none"
    }

    
}

let currentIndex, formerIndex;

function displayDropdown(index){
    currentIndex = index;
    for (let i=0; i<3; i++){
        dropdownItems[i].style.display ="none"
        lightArrows[i].style.transform ="rotate(0deg)"
        darkArrows[i].style.transform ="rotate(0deg)"
        
    }

    if (currentIndex === formerIndex){
        formerIndex = 4;
        return
    }
        dropdownItems[index].style.display ="block"
        lightArrows[index].style.transform ="rotate(180deg)"
        darkArrows[index].style.transform ="rotate(180deg)"
        formerIndex = index
        return

}
