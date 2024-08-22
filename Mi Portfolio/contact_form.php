<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoge y limpia los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Configura los parámetros del correo
    $to = 'juliana.gomez.traverso@gmail.com';
    $subject = 'Nuevo mensaje de contacto';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Cuerpo del mensaje
    $body = "<p><strong>Nombre:</strong> $name</p>";
    $body .= "<p><strong>Correo Electrónico:</strong> $email</p>";
    $body .= "<p><strong>Mensaje:</strong></p>";
    $body .= "<p>$message</p>";

    // Envía el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Gracias por tu mensaje. Te responderemos pronto.";
    } else {
        echo "Lo siento, hubo un problema al enviar tu mensaje.";
    }
} else {
    echo "Método de solicitud no permitido.";
}
?>
