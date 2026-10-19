const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
  });
});

const gallery = document.querySelector('.gallery-dialog');
const galleryTitle = document.querySelector('#gallery-title');
const openGallery = (title) => {
  galleryTitle.textContent = title;
  gallery.showModal();
};

document.querySelectorAll('.gallery-trigger').forEach((button) => {
  button.addEventListener('click', () => openGallery(button.dataset.galleryTitle));
});

const photoTile = document.querySelector('.image-still');
photoTile.addEventListener('click', () => openGallery('Up at the net'));
photoTile.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openGallery('Up at the net');
  }
});
document.querySelector('.gallery-close').addEventListener('click', () => gallery.close());
gallery.addEventListener('click', (event) => {
  if (event.target === gallery) gallery.close();
});
