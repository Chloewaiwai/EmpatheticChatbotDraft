'use strict'

/*===============Change them===============*/
const switcher = document.querySelector('.btn');

switcher.addEventListener('click',function changetheme(){
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if (className == "light-theme"){
        this.textContent = "Dark mode"
    }
    else{
        this.textContent = "Light mode"
    }
    console.log('current class name: ' + className);
})




