document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelectorAll('section').forEach(section => section.classList.toggle('dark-mode'));
    document.querySelector('footer').classList.toggle('dark-mode');
});

document.getElementById('language-toggle').addEventListener('click', function() {
    const isEnglish = document.body.lang === 'en';
    document.body.lang = isEnglish ? 'es' : 'en';
    
    document.querySelector('h1').textContent = isEnglish ? 'Jhon Diaz' : 'Jhon Diaz';
    document.querySelector('header p').textContent = isEnglish ? 'Back End Developer' : 'Programador Back End';
    document.querySelector('#sobre-mi h2').textContent = isEnglish ? 'About Me' : 'Sobre mí';
    document.querySelector('#proyectos h2').textContent = isEnglish ? 'Projects' : 'Proyectos';
    document.querySelector('#contacto h2').textContent = isEnglish ? 'Contact' : 'Contacto';
    document.querySelector('#contacto p').innerHTML = isEnglish ? 'You can contact me at: <a href="mailto:jhon.diaz@example.com">jhon.diaz@example.com</a>' : 'Puedes contactarme a través de mi correo: <a href="mailto:jhon.diaz@example.com">jhon.diaz@example.com</a>';
    this.textContent = isEnglish ? 'ES' : 'EN';
});
