<?php
	function mail_utf8($to, $subject = '(No subject)', $message = '', $header = '') {
	  $header_ = 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/plain; charset=UTF-8' . "\r\n";
	  mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $header_ . $header);
	}

	$first_name=$_POST['first_name'];
	$email=$_POST['email'];
	$telephone=$_POST['telephone'];
	$from=$_POST['from'];
	$to_1=$_POST['to'];
	$startDate=$_POST['startDate'];
	$endDate==$_POST['endDate'];
	$selectCar==$_POST['state'];
	$numPeople==$_POST['zip'];
	$detail==$_POST['comment'];

	$to='xuanchinh1994@gmail.com'; // Receiver Email ID, Replace with your email ID
	$subject='BOOK XE ONLINE';
	$message="TÊN KHÁCH HÀNG :".$first_name."\n"
			."SỐ ĐT          :".$telephone."\n"
			."EMAIL          :".$email."\n"
			."ĐIỂM ĐI        :".$from."\n"
			."ĐIỂM ĐẾN       :".$to_1."\n"
			."THỜI GIAN ĐI   :".$startDate."\n"
			."THỜI GIAN VỀ   :".$endDate."\n"
			."LOẠI XE        :".$selectCar."\n"
			."SỐ NGƯỜI       :".$numPeople."\n"
			."CHI TIẾT       :".$detail."\n"
			."-----------------------------"."\n";
	var_dump($message);
	// $headers="From: ".$email;
	$headers = "From: " . $first_name . "<". $email .">\r\n";

	if(mail_utf8($to, $subject, $message, $headers)){
		echo "Sent Successfully! Thank you"." ".$first_name.", We will contact you shortly!</h1>";
	}
	else{
		echo "Something went wrong!";
	}
?>