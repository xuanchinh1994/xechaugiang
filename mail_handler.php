<?php
	function mail_utf8($to, $subject = '(No subject)', $message = '', $header = '') {
	  $header_ = 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/html; charset=UTF-8' . "\r\n";
	  mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $header_ . $header);
	}

	$first_name=$_POST['first_name'];
	$email=$_POST['email'];
	$telephone=$_POST['telephone'];
	$from=$_POST['from'];
	$to=$_POST['to'];
	$startDate=$_POST['startDate'];
	$endDate==$_POST['endDate'];
	$selectCar==$_POST['state'];
	$numPeople==$_POST['zip'];
	$detail==$_POST['comment'];

	$to='xuanchinh1994@gmail.com'; // Receiver Email ID, Replace with your email ID
	$subject='Book Xe Online';
	$message="
	<html>
	<head>
	<title></title>
	</head>
	<body>
	<p>Phiếu Đặt Xe Online</p>
	<table>
	<tr><th>Tên Khách Hàng</th><th>Số Điện Thoại</th><th>Email  </th><th>Điểm Đi</th><th>Điểm Đến</th><th>Thời Gian Đi</th><th>Thời Gian Về</th><th>Loại Xe    </th><th>Số Lượng Khách</th><th>Miêu Tả Chuyến Đi</th></tr>
	<tr><td>.$first_name  </td><td>.$telephone  </td><td>.$email</td><td>.$from </td><td>.$to    </td><td>.$startDate </td><td>.$endDate   </td><td>.$selectCar</td><td>.$numPeople   </td><td>.$detail         </td></tr>
	</table>
	</body>
	</html>
	Name :".$first_name."\n"."Phone :".$telephone."\n"."Wrote the following :"."\n\n".$from;
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