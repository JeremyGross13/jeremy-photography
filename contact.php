<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <title> Jeremy Gross | Contact </title>
    <meta name="description"
        content="Here, you can easily get in touch with me to discuss your photography needs and capture those special moments. 
        Whether you're looking for a professional photo shoot, event coverage, or any other photography service, 
        I'm here to help bring your vision to life. Feel free to fill out the contact form below, and I'll get back to you as soon as possible.">
    <meta name="keywords" content="photo, photography, shooting, cars, landscape, cities, pictures">
    <meta name="author" content="Jérémy Gross">
    <link id="theme" rel="stylesheet" href="assets/css/style.css">
    <link rel="icon" href="assets/img/icon.png">
</head>

<body>

    <?php include 'utils/header.php'; ?>

    <section class="contact">
        <article>
            <h2>Contact form</h2>
            <form method="post" action="utils/envoi-email.php">
                <input type="text" id="nom" name="nom" placeholder="First Name" required>

                <input type="text" id="prenom" name="prenom" placeholder="Last Name" required>

                <input type="tel" id="telephone" name="telephone" placeholder="Phone" required>

                <input type="text" id="email" name="email" placeholder="Mail" required>

                <textarea id="message" name="message" rows="4" placeholder="Message" required></textarea>

                <input type="submit" value="Send">
            </form>
        </article>
    </section>

    <?php include 'utils/footer.php'; ?>

    <script src="assets/js/app.js"></script>
</body>

</html>