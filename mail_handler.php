<?php	
	$first_name=$_POST['first_name'];
	$email=$_POST['email'];
	$telephone=$_POST['telephone'];
	$from=$_POST['from'];

	$to='xuanchinh1994@gmail.com'; // Receiver Email ID, Replace with your email ID
	$subject='Form Submission';
	$message="Name :".$first_name."\n"."Phone :".$telephone."\n"."Wrote the following :"."\n\n".$from;
	// $headers="From: ".$email;
	$headers = "From: " . $first_name . "<". $email .">\r\n";

	if(mail($to, $subject, $message, $headers)){
		echo "Sent Successfully! Thank you"." ".$first_name.", We will contact you shortly!</h1>";
	}
	else{
		echo "Something went wrong!";
	}
?>