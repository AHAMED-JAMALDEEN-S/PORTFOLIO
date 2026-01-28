function loadPage(page, title, activeLink) {
  fetch(page)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');


      document.getElementsByClassName("image")[0].innerHTML = doc.querySelector('.proof').innerHTML;
      document.getElementsByClassName("content")[0].innerHTML = doc.querySelector('.details').innerHTML;
    
      document.title = title;
      
      document.querySelectorAll('.nav-links a').
      forEach(link => {
        link.classList.remove('active');
      });
      
      activeLink.classList.add('active');

      const navLinks = document.querySelector('.nav-links');
      const menuIcon = document.querySelector('.menu i');

      navLinks.classList.remove('show');

      if (menuIcon) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
      else{
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
      }
    })
    .catch(error => {
      document.getElementsByClassName("content")[0].innerHTML =
        "<p>Error loading page</p>";
    });
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.querySelector('.menu i');

  navLinks.classList.toggle('show');

  if (navLinks.classList.contains('show')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
}

const slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}