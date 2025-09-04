const My_spinner = document.querySelector('.myspinner');
var progBar = document.querySelector('div.progress-bar');
window.addEventListener('load',()=>{
    My_spinner.style.opacity = '0';
    setTimeout(()=>
        { 
            My_spinner.style.display ='none'; 
        }
        ,100)
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

function alertSubmission()
{
    var alertEl = document.getElementById('popupAlert');
    alertEl.style.display = 'block';       
    alertEl.classList.add('show');         
    var bsAlert = new bootstrap.Alert(alertEl);
    setTimeout(function () {
        bsAlert.close();
    }, 2000);
}
