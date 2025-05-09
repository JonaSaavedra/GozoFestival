<?php
// Verifica si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Verifica si se recibió el campo del email
    if (isset($_POST["email"]) && !empty($_POST["email"])) {

        // Limpia el email recibido
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

        // Verifica si el email es válido
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

            // Dirección de destino ficticia
            $to = "ejemplo@falso.com";

            // Asunto del correo
            $subject = "Nuevo contacto desde el formulario";

            // Cuerpo del mensaje
            $message = "Se ha recibido un nuevo correo electrónico desde el formulario:\n\nEmail: $email";

            // Cabeceras del correo
            $headers = "From: no-reply@tusitio.com\r\n";
            $headers .= "Reply-To: $email\r\n";

            // Intenta enviar el correo
            if (mail($to, $subject, $message, $headers)) {
                echo "Mensaje enviado correctamente.";
            } else {
                echo "Error al enviar el mensaje.";
            }
        } else {
            echo "Correo electrónico no válido.";
        }
    } else {
        echo "El campo de correo electrónico está vacío.";
    }
} else {
    echo "Acceso no autorizado.";
}
?>