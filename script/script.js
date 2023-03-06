document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('burger').addEventListener('click', function() {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.burger-menu').classList.toggle('active');
  })
});

// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('.slider-items').addEventListener('click', function() {
//     document.querySelector('.burger').classList.toggle('active');
//   })
// });