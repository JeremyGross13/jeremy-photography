<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <title> Mail Confirmation </title>
    <meta name="author" content="Jérémy Gross">
    <link id="theme" rel="stylesheet" href="assets/css/style.css">
    <link rel="icon" href="assets/img/icon.png">
</head>

<body>

    <section class="confirmation">
        <span>
            Your email has been correctly sent !
        </span>
        <p>
            You will be redirected automatically in <span id="countdown">5</span> seconds.
        </p>
    </section>

    <script>
        // Définir le nombre de secondes pour le décompte
        var countdownSeconds = 5;

        // Fonction pour mettre à jour le décompte
        function updateCountdown() {
            var countdownElement = document.getElementById("countdown");
            countdownElement.innerHTML = countdownSeconds;
            countdownSeconds--;

            if (countdownSeconds < 0) {
                // Redirection vers index.php après le décompte
                window.location.href = "index.php";
            } else {
                setTimeout(updateCountdown, 1000);
            }
        }

        // Lancer le décompte lors du chargement de la page
        window.onload = function () {
            setTimeout(updateCountdown, 1000);
        };
    </script>
</body>

</html>