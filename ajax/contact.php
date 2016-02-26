<?php 

require '../vendor/autoload.php';

use Mailgun\Mailgun;

if (isset($_POST)) {

	$_POST['name'] = htmlspecialchars($_POST['name'], ENT_QUOTES);
	$_POST['email'] = htmlspecialchars($_POST['email'], ENT_QUOTES);
	$_POST['number'] = htmlspecialchars($_POST['number'], ENT_QUOTES);
	$_POST['message'] = htmlspecialchars($_POST['message'], ENT_QUOTES);

	sleep(2);

	# Instantiate the client.

	# creating new object with mailgun API (class already made)
	$mgClient = new Mailgun('key-da60199e912bcaac6368c287959ff499');
	$domain = "sandbox0a4f558326d949d0a0b1659e0d84d940.mailgun.org";

	// store output in internal buffer but don't do anything with it yet
	ob_start();

	include 'emailhost.php';

	// Returns the contents of the output buffer and end output buffering
	$emailBody = ob_get_clean();
	# Make the call to the client.

	$result = $mgClient->sendMessage($domain, array(
	    'from'    =>  $emailHeader['from'],
	    'to'      =>  $emailHeader['to'],
	    'subject' =>  $emailHeader['subject'],
	    'text'    =>  $emailBody
	));

	echo "Thank-you for your enquiry.<br>You will hear from us very soon.<br><br> The Biome Team";
} else {
	"Something went wrong, our apologies. Please contact Ben directly on...";
}

