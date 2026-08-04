const menuToggle = document.getElementById('menu-toggle');
const dropdownLinks = document.querySelectorAll('.dropdown');

menuToggle.addEventListener('click', function(){
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  dropdownLinks.forEach(function(link){
    link.classList.toggle('show');
  });
  menuToggle.setAttribute('aria-expanded', !isOpen);
});


async function loadGallery() {
    const response = await fetch('gallery.json');
    const filenames = await response.json();
    const template = document.getElementById('galerka');
    const container = document.getElementById('galery-pic');
    filenames.forEach(function(filename){
      const clone = template.content.cloneNode(true);
      clone.querySelector('img').src = 'images/galery/' + filename;
      container.appendChild(clone);
    })
}
loadGallery();
