function loadPage(page, title, activeLink) {
  fetch(page)
    .then(response => response.text())
    .then(data => {
      document.getElementsByClassName("content")[0].innerHTML = data;
    
      document.title = title;
      
      document.querySelectorAll('.nav-links a').
      forEach(link => {
        link.classList.remove('active');
      });
      
      activeLink.classList.add('active');
    })
    .catch(error => {
      document.getElementsByClassName("content")[0].innerHTML =
        "<p>Error loading page</p>";
    });
}