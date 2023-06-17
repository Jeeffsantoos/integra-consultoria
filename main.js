const menu = document.getElementById("header-integra"); // colocar em cache
window.addEventListener("scroll", function () {
  
  if (window.scrollY > 0) {
    menu.classList.add("header-scroll");
    for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {
      
    }
  } else {
    menu.classList.remove("header-scroll");
    for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {
      
    }
  }
});

document.querySelector('.btn-home').style.opacity = "0"
window.addEventListener('scroll', function(){

const button = document.querySelector('.btn-home');
let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 100) {
    button.style.opacity = '1';
  }
  else {
    button.style.opacity = '0';
  }
  
});

const menuButton = document.querySelector('.menu-button');
const headerMenu = document.querySelector('.header-menu');

  menuButton.addEventListener('click', function() {
    headerMenu.classList.toggle('active');
  });

  let item = document.getElementById("item")
  let contracts = document.getElementById("contracts")
  let company = document.getElementById("company")
  let text = document.getElementById("text")
  let title = document.getElementById("title")
  
    window.addEventListener("scroll", function(){
      const sectionTop = item.getBoundingClientRect().top;
      const sectionMid = contracts.getBoundingClientRect().top;
      const sectionSa = company.getBoundingClientRect().top;
      const sectionText = text.getBoundingClientRect().top;
      const sectionTitle = title.getBoundingClientRect().top;
      const windowHeight=window.innerHeight;
  
      if(sectionTop < windowHeight){
        item.classList.add("ativa");
      }
  
      else{
        item.classList.remove("ativa");
      }
      
      if(sectionMid < windowHeight){
        contracts.classList.add("ativa");
      }
  
      else{
        contracts.classList.remove("ativa");
      }

      if(sectionSa < windowHeight){
        company.classList.add("ativa");
      }
  
      else{
        company.classList.remove("ativa");
      }

      if(sectionText < windowHeight){
        text.classList.add("ativa");
      }
  
      else{
        text.classList.remove("ativa");
      }
  
      if(sectionTitle < windowHeight){
        title.classList.add("ativa");
      }
  
      else{
        title.classList.remove("ativa");
      }
    });