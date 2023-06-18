<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $telephone = $_POST["telephone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "jeremygross1307@gmail.com";
    $subject = "Nouveau message du formulaire de contact";
    $body = "Nom: $nom\nPrénom: $prenom\nTéléphone: $telephone\nE-mail: $email\nMessage:\n$message";

    // Envoi de l'e-mail
    mail($to, $subject, $body);

    // Redirection vers une page de confirmation ou un message de succès
    header("Location: ../confirmation.php");
    exit();
}