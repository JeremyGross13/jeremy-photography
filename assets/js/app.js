function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function choisirPhotosAleatoires() {
    const images = [
        "assets/img/Aquarium/IMG_3615.webp",
        "assets/img/Aquarium/IMG_3616.webp",
        "assets/img/Aquarium/IMG_3617.webp",
        "assets/img/Aquarium/IMG_3618.webp",
        "assets/img/Aquarium/IMG_3622.webp",
        "assets/img/Aquarium/IMG_3623.webp",
        "assets/img/Aquarium/IMG_3624.webp",
        "assets/img/Aquarium/IMG_3628.webp",
        "assets/img/Aquarium/IMG_3629.webp",
        "assets/img/Aquarium/IMG_3637.webp",
        "assets/img/Aquarium/IMG_3638.webp",
        "assets/img/Aquarium/IMG_3640.webp",
        "assets/img/Aquarium/IMG_3642.webp",
        "assets/img/Aquarium/IMG_3645.webp",
        "assets/img/Aquarium/IMG_3648.webp",
        "assets/img/Begur/IMG_0518.webp",
        "assets/img/Begur/IMG_0519.webp",
        "assets/img/Begur/IMG_0527.webp",
        "assets/img/Begur/IMG_0528.webp",
        "assets/img/Begur/IMG_0529.webp",
        "assets/img/Begur/IMG_0533.webp",
        "assets/img/Begur/IMG_0548.webp",
        "assets/img/Begur/IMG_0551.webp",
        "assets/img/Begur/IMG_0555.webp",
        "assets/img/Begur/IMG_0560.webp",
        "assets/img/Begur/IMG_0563.webp",
        "assets/img/Begur/IMG_3357.webp",
        "assets/img/Begur/IMG_3360.webp",
        "assets/img/Begur/IMG_3383.webp",
        "assets/img/Begur/IMG_3384.webp",
        "assets/img/LaCiotat/IMG_1308.webp",
        "assets/img/LaCiotat/IMG_1319.webp",
        "assets/img/LaCiotat/IMG_1328.webp",
        "assets/img/LaCiotat/IMG_1331.webp",
        "assets/img/LaCiotat/IMG_1332.webp",
        "assets/img/LaCiotat/IMG_1335.webp",
        "assets/img/LaCiotat/IMG_1342.webp",
        "assets/img/LaCiotat/IMG_1343.webp",
        "assets/img/LaCiotat/IMG_1348.webp",
        "assets/img/LaCiotat/IMG_1351.webp",
        "assets/img/LaCiotat/IMG_1370.webp",
        "assets/img/LaCiotat/IMG_1379.webp",
        "assets/img/LaCiotat/IMG_1380.webp",
        "assets/img/LaCiotat/IMG_1385.webp",
        "assets/img/LaCiotat/IMG_1393.webp",
        "assets/img/LaCiotat/IMG_1395.webp",
        "assets/img/LaCiotat/IMG_1398.webp",
        "assets/img/LaCiotat/IMG_1405.webp",
        "assets/img/LaCiotat/IMG_1412.webp",
        "assets/img/LaCiotat/IMG_1420.webp",
        "assets/img/Monaco/IMG_0701.webp",
        "assets/img/Monaco/IMG_0895.webp",
        "assets/img/Monaco/IMG_3497.webp",
        "assets/img/Monaco/IMG_3499.webp",
        "assets/img/Monaco/IMG_3501.webp",
        "assets/img/Monaco/IMG_3502.webp",
        "assets/img/Monaco/IMG_3506.webp",
        "assets/img/Monaco/IMG_3555.webp",
        "assets/img/Monaco/IMG_3557.webp",
        "assets/img/Monaco/IMG_3620.webp",
        "assets/img/Monaco/IMG_3625.webp",
        "assets/img/Monaco/IMG_3631.webp",
        "assets/img/Monaco/IMG_3641.webp",
        "assets/img/Monaco/IMG_3643.webp",
        "assets/img/Monaco/IMG_3657.webp",
        "assets/img/Sausset/IMG_1898.webp",
        "assets/img/Sausset/IMG_1900.webp",
        "assets/img/Sausset/IMG_1902.webp",
        "assets/img/Sausset/IMG_1904.webp",
        "assets/img/Sausset/IMG_1906.webp",
        "assets/img/Sausset/IMG_1907.webp",
        "assets/img/Sausset/IMG_1908.webp",
        "assets/img/Sausset/IMG_1915.webp",
        "assets/img/Sausset/IMG_1916.webp",
        "assets/img/Sausset/IMG_1919.webp",
        "assets/img/Sausset/IMG_1928.webp",
        "assets/img/Sausset/IMG_1929.webp",
        "assets/img/Sausset/IMG_1934.webp",
        "assets/img/Sausset/IMG_1939.webp",
        "assets/img/Sausset/IMG_1942.webp",
        "assets/img/Sausset/IMG_1944.webp",
        "assets/img/Sausset/IMG_1945.webp",
        "assets/img/Sausset/IMG_1950.webp",
        "assets/img/Sausset/IMG_1954.webp",
        "assets/img/Sausset/IMG_1959.webp",
        "assets/img/Sausset/IMG_1963.webp",
        "assets/img/Nice/IMG_2765.webp",
        "assets/img/Nice/IMG_2786.webp",
        "assets/img/Nice/IMG_2789.webp",
        "assets/img/Nice/IMG_2790.webp",
        "assets/img/Nice/IMG_2791.webp",
        "assets/img/Nice/IMG_2803.webp",
        "assets/img/Nice/IMG_2806.webp",
        "assets/img/Nice/IMG_3294.webp",
        "assets/img/Nice/IMG_3304.webp",
        "assets/img/MonacoGP/IMG_2863.webp",
        "assets/img/MonacoGP/IMG_3013.webp",
        "assets/img/MonacoGP/IMG_3257.webp",
        "assets/img/MonacoGP/IMG_3259.webp",
        "assets/img/MonacoGP/IMG_3264.webp",
        "assets/img/MonacoGP/IMG_3266.webp",
        "assets/img/MonacoGP/IMG_3270.webp",
        "assets/img/MonacoGP/IMG_3280.webp",

    ];

    // Sélectionner 12 images aléatoirement
    const randomImages = [];
    while (randomImages.length < 12) {
        const randomIndex = Math.floor(Math.random() * images.length);
        if (!randomImages.includes(images[randomIndex])) {
            randomImages.push(images[randomIndex]);
        }
    }

    randomImages.forEach(image => {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.innerHTML = `<img class="vertical2 fade-in" src="${image}" alt="photo">`;
        document.getElementById("imagesAleatoires").appendChild(div);
    });
}

function fadeIn(element, delay) {
    setTimeout(function () {
        var opacity = 0;
        var intervalID = setInterval(function () {
            if (opacity < 1) {
                opacity += 0.1; // Ajustez cette valeur pour contrôler la vitesse du fondu
                element.style.opacity = opacity;
            } else {
                clearInterval(intervalID);
            }
        }, 1); // Ajustez cette valeur pour contrôler l'intervalle de temps entre chaque étape de fondu
    }, delay);
}

function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}
