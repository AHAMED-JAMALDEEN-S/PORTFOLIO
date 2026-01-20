function loadPage(page, title) {
  fetch(page)
    .then(response => response.text())
    .then(data => {
      document.getElementsByClassName("content")[0].innerHTML = data;
      document.title = title;
    })
    .catch(error => {
      document.getElementsByClassName("content")[0].innerHTML =
        "<p>Error loading page</p>";
    });
}