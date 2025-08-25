// JS TOGGLE SECTIONS
const links = document.querySelectorAll('.navbar-link');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const target = link.getAttribute('data-target');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

const tabLinks = document.querySelectorAll('.project-tab-link');
const tabContents = document.querySelectorAll('.project-tab');

tabLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const category = link.getAttribute('data-category');

    // Set active link
    tabLinks.forEach(btn => btn.classList.remove('active'));
    link.classList.add('active');

    // Show matching tab content
    tabContents.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-category') === category);
    });
  });
});
