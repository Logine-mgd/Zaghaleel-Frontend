const My_spinner = document.querySelector('.myspinner');
var progBar = document.querySelector('div.progress-bar');
window.addEventListener('load',()=>{
    My_spinner.style.opacity = '0';
    setTimeout(()=>
        { 
            My_spinner.style.display ='none'; 
        }
        ,300)
});    

var email = document.getElementById('email');
var user = document.getElementById('username');
var password = document.getElementById('password');
var age = document.getElementById('age');

function emailWidthProg()
{
    progBar.style.width = '25%';
}

function userWidthProg()
{
    progBar.style.width = '50%';
}
function passWidthProg()
{
    progBar.style.width = '75%';
}
function ageWidthProg()
{
    progBar.style.width = '100%';
}