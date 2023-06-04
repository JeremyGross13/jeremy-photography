// Fonction pour définir un cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Fonction pour récupérer la valeur d'un cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Fonction pour charger le thème depuis le cookie lors du chargement de la page
function loadThemeFromCookie() {
    var themeLink = document.getElementById('theme');
    var savedTheme = getCookie('theme');
    if (savedTheme === 'sombre') {
        if (window.location.pathname === '/jeremyphotography.alwaysdata.net/index.html' || window.location.pathname === '/jeremyphotography.alwaysdata.net/contact.html') {
            themeLink.setAttribute('href', 'assets/css/sombre.css');
        }
        else {
            themeLink.setAttribute('href', '../assets/css/sombre.css');
        }

    }
}

// Fonctions pour changer le thème
function switchTheme() {
    var themeLink = document.getElementById('theme');
    var currentTheme = themeLink.getAttribute('href');
    if (currentTheme === 'assets/css/style.css') {
        themeLink.setAttribute('href', 'assets/css/sombre.css');
        setCookie('theme', 'sombre', 30); // Enregistrer le thème dans un cookie pendant 30 jours
    } else {
        themeLink.setAttribute('href', 'assets/css/style.css');
        setCookie('theme', 'clair', 30); // Enregistrer le thème dans un cookie pendant 30 jours
    }
}

function switchThemePages() {
    var themeLink = document.getElementById('theme');
    var currentTheme = themeLink.getAttribute('href');
    if (currentTheme === '../assets/css/style.css') {
        themeLink.setAttribute('href', '../assets/css/sombre.css');
        setCookie('theme', 'sombre', 30); // Enregistrer le thème dans un cookie pendant 30 jours
    } else {
        themeLink.setAttribute('href', '../assets/css/style.css');
        setCookie('theme', 'clair', 30); // Enregistrer le thème dans un cookie pendant 30 jours
    }
}

// Appeler la fonction pour charger le thème depuis le cookie lors du chargement de la page
loadThemeFromCookie();