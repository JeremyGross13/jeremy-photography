function switchTheme() {
    var themeLink = document.getElementById('theme');

    if (themeLink) {
        var currentTheme = themeLink.getAttribute('href');
        if (currentTheme === 'assets/css/style.css') {
            themeLink.setAttribute('href', 'assets/css/sombre.css');
        } else {
            themeLink.setAttribute('href', 'assets/css/style.css');
        }
    }
}

function switchThemePages() {
    var themeLink = document.getElementById('theme');

    if (themeLink) {
        var currentTheme = themeLink.getAttribute('href');
        if (currentTheme === '../assets/css/style.css') {
            themeLink.setAttribute('href', '../assets/css/sombre.css');
        } else {
            themeLink.setAttribute('href', '../assets/css/style.css');
        }
    }
}