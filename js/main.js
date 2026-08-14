const nav=document.querySelector('.site-header nav');
const menu=document.querySelector('.menu');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
const reveal=()=>document.querySelectorAll('.service-grid article,.process-grid div,.visual-card').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight-40){el.style.opacity='1';el.style.transform='translateY(0)'}});
document.querySelectorAll('.service-grid article,.process-grid div,.visual-card').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity .6s ease,transform .6s ease'});
addEventListener('scroll',reveal,{passive:true});reveal();