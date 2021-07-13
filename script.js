
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

let dropdownState = 0;

function displayDropdown(index){
    console.log('drop down state was '+ dropdownState)
    if (dropdownState === 0){

        dropdownItems[index].style.display ="block"
        lightArrows[index].style.transform ="rotate(180deg)"
        darkArrows[index].style.transform ="rotate(180deg)"
        dropdownState = 1
        console.log('drop down state is '+ dropdownState)
        return
    }

    if(dropdownState === 1){
        for (let i=0; i<3; i++){
            dropdownItems[i].style.display ="none"
            lightArrows[i].style.transform ="rotate(0deg)"
            darkArrows[i].style.transform ="rotate(0deg)"
        }
        dropdownState = 0
        console.log('drop down state is '+ dropdownState)
        return
    }
}
