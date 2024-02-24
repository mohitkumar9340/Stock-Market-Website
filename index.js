const box=document.querySelector('.box');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');
// const getStarted=document.querySelector('get_started');


registerLink.addEventListener('click',()=>{
    box.classList.add('active'); 
});

loginLink.addEventListener('click',()=>{
    box.classList.remove('active'); 
});

btnPopup.addEventListener('click',()=>{
    box.classList.add('active-popup'); 
});

// getStarted.addEventListener('click',()=>{
//     box.classList.add('active-popup'); 
// });

iconClose.addEventListener('click',()=>{
    box.classList.remove('active-popup'); 
});







  