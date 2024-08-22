<?php
switch ($_SERVER["REQUEST_METHOD"]) {
    case "POST":
        $to = "juliana.gomez.traverso@gmail.com";
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);

        $subject = "Consulta portfolio de $name";
        $body = "Nombre: $name\n";
        $body .= "Correo Electrónico: $email\n";
        $body .= "Mensaje:\n$message";

        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        if (mail($to, $subject, $body, $headers)) {
            echo "Gracias por tu mensaje, $name. Nos pondremos en contacto contigo pronto.";
        } else {
            echo "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.";
        }
        break;

    case "GET":
        echo "Método GET no permitido para este formulario.";
        http_response_code(405); 
        break;

    default:
        echo "Método HTTP no soportado.";
        http_response_code(405); 
        break;
}
