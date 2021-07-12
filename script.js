
let nav = document.getElementById('nav');
let x = document.getElementById('x')
let hamburger = document.getElementById('hamburger')

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