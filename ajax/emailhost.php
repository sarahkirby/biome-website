<?php

$emailHeader = [
	'from'    => 'Biome Website< mailgun@' .$domain. '>',
	'to' 	  => '<sk.irby@icloud.com>',
	'subject' => 'Message from '. $_POST['name'] .'.'
	];

?>
Hi Ben,

A message has been sent through your website.

Message:

Name: <?= $_POST['name']; ?>

Email: <?= $_POST['email']; ?>

Phone: <?= $_POST['number']; ?>

Message: <?= $_POST['message']; ?>


