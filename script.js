const menuToggle = document.getElementById('menu-toggle');
const dropdownLinks = document.querySelectorAll('.dropdown');

menuToggle.addEventListener('click', function(){
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  dropdownLinks.forEach(function(link){
    link.classList.toggle('show');
  });
  menuToggle.setAttribute('aria-expanded', !isOpen);
});