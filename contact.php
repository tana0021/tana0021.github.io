<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = 'From: Portfolio'; 
$to = 'katina.tanascon@gmail.com'; // send to this address
$subject = 'Portfolio Contact Form'; //subject line in email

$body = "From: $name\n
Email: $email\n 
Message:\n $message";

mail($to, $subject, $body); 
header("Location: http://tana0021.github.io/contact.html"); /* Redirect browser */
exit();

?>