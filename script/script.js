document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.burger-menu').addEventListener('click', function() {
    document.querySelector('.burger-menu').classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('active');
  })
});
