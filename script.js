document.addEventListener('DOMContentLoaded', function() {
    // Ajouter une animation de survol sur les sections
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s';
        });
        section.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Afficher ou masquer les détails d'expérience professionnelle au clic
    var experience = document.getElementById('experience');
    var experienceDetails = experience.querySelector('ul');
    var experienceToggle = experience.querySelector('h3');
    experienceToggle.addEventListener('click', function() {
        experienceDetails.classList.toggle('hidden');
    });

    // Ajouter un effet de défilement doux pour les liens internes
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
$(document).ready(function() {
    // Ajouter une bordure et une ombre douce aux sections
    $('section').css({
        'border': '1px solid #ccc',
        'box-shadow': '2px 2px 5px #aaa',
        'padding': '20px',
        'transition': 'transform 0.3s'
    });

    // Ajouter une animation de survol sur les sections
    $('section').hover(function() {
        $(this).css('transform', 'scale(1.05)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });

    // Changer la couleur du texte au survol des liens de navigation
    $('nav a').hover(function() {
        $(this).css('color', '#333');
    }, function() {
        $(this).css('color', '#555');
    });

    // Ajouter un effet de fondu lors du clic sur les liens internes
    $('nav a').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Ajouter une bordure et une couleur de fond au bouton de contact
    $('#contactButton').css({
        'border': '2px solid #555',
        'background-color': '#fff',
        'color': '#555',
        'padding': '10px 20px',
        'cursor': 'pointer'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navigation = document.querySelector('.navigation');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('active');
    });
});
