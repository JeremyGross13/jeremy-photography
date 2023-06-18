function verifierApparitionSections() {
    var sections = document.querySelectorAll('.animate');
    var hauteurEcran = window.innerHeight;
    var seuilScroll = hauteurEcran * 0.7; // Modifier la valeur selon vos besoins

    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var positionSection = section.getBoundingClientRect().top;

        if (positionSection < seuilScroll) {
            section.classList.add('apparition-active');
        }
    }
}

function gererScroll() {
    verifierApparitionSections();
}

window.addEventListener('load', function () {
    verifierApparitionSections();

    window.addEventListener('scroll', gererScroll);
});

var path = window.location.pathname;
path = path.substring(path.lastIndexOf('/') + 1);

var navLinks = document.querySelectorAll('.nav a');

for (var i = 0; i < navLinks.length; i++) {
    var linkPath = navLinks[i].getAttribute('href');

    if (linkPath === path) {
        navLinks[i].classList.add('active');
    }
}