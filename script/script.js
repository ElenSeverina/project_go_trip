document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('burger').addEventListener('click', function() {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.burger-menu').classList.toggle('active');
  })
});
