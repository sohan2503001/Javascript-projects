const enterbtn = document.querySelector('.enter');
const resetbtn = document.querySelector('.reset');
const age01 = document.getElementById('ageo-1');
const age02 = document.getElementById('ageo-2');
const age03 = document.getElementById('ageo-3');
const age04 = document.getElementById('ageo-4');


//input and calculation function
const calc = function () {
    var out = prompt("Enter the year of birth")
    var age = 2021 - out;
    var age1 = age * 365;
    age01.textContent = "You Are";
    age02.textContent = age + " Years Old";
    age03.textContent = "OR";
    age04.textContent = age1 + " Days Old";

    console.log(age);
}

//reset function
const end = function () {
    age01.textContent = '';
}

enterbtn.addEventListener('click', calc);
resetbtn.addEventListener('click', end);

