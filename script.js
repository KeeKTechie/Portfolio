const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click',() =>{

    navLinks.classList.toggle('active')
});


const typed = new Typed('.typed-text', {
    strings: ['Front-End Developer.', 'Graphics Designer.', 'Excel Enthusiast.', 'Data Analyst.', 'UI/UX Designer.', 'Crypto Enthusiast.', 'Professional Trader.', 'Web Designer'],
    typeSpeed: 100,
    backspeed: 60,
    loop: true
  });