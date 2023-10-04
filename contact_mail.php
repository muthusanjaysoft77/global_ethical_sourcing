<?php
define('EMAIL_SUBJECT','Global Ethical Sourcing Contact Us');
define('RECIPIENT_EMAIL','esakkimuthusg@gmail.com');

if (isset($_POST) && !empty($_POST)) {
	
    // Form Post Value
    $name = sanitizeString($_POST['name']);
	$email = sanitizeString($_POST['email']);
    $phone = sanitizeString($_POST['phone']);
    $subject = sanitizeString($_POST['subject']);
    $message = sanitizeString($_POST['message']);

    // Validate the form fields (you can add more validation if needed)
    if (empty($name) || empty($email) || empty($phone) || empty($subject) || empty($message)) {
        echo "Oops! Please fill in all the required fields.";
        exit;
    } else {		
		$email_message="<font face='Verdana' size='2'><b>Hello Asha,</b><br><br></font>
			<font face='Verdana' size='2'>Global Ethical Sourcing Contact Us Information is as follows:<br></font>
			<table border='0' cellpadding='0' cellspacing='0' bgcolor='#E0E0E0' width='810'><tr><td>
				<table border='0' cellpadding='3' cellspacing='1' width='810'>
				<tr bgcolor='#F7F7F7'>
				 <td align='left' width='250'><font face='Verdana' size='2'><b>Name</b></font></td>
				  <td align='center' width='17'><font face='Verdana' size='2'><b>:</b></font></td>
				  <td align='left'><font face='Verdana' size='2'>".$name."</font></td>
				</tr>
				<tr bgcolor='#F7F7F7'>
				  <td align='left' width='250'><font face='Verdana' size='2'><b>Email</b></font></td>
				   <td align='center' width='17'><font face='Verdana' size='2'><b>:</b></font></td>
				  <td align='left'><font face='Verdana' size='2'>".$email."</font></td>
				</tr>
				<tr bgcolor='#F7F7F7'>
				  <td align='left' width='250'><font face='Verdana' size='2'><b>Phone</b></font></td>
				   <td align='center' width='17'><font face='Verdana' size='2'><b>:</b></font></td>
				  <td align='left'><font face='Verdana' size='2'>".$phone."</font></td>
				</tr>
				<tr bgcolor='#F7F7F7'>
				  <td align='left' width='250'><font face='Verdana' size='2'><b>Subject</b></font></td>
				   <td align='center' width='17'><font face='Verdana' size='2'><b>:</b></font></td>
				  <td align='left'><font face='Verdana' size='2'>".$subject."</font></td>
				</tr>
				<tr bgcolor='#F7F7F7'>
				  <td align='left' width='250'><font face='Verdana' size='2'><b>Message</b></font></td>
				   <td align='center' width='17'><font face='Verdana' size='2'><b>:</b></font></td>
				  <td align='left'><font face='Verdana' size='2'>".$message."</font></td>
				</tr>
				</table></td></tr>
			</table>";
			
			$headers = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
			$headers .= 'From: '.$name.' <'.$email.'>' . "\r\n";
			$mailSend = mail(RECIPIENT_EMAIL, EMAIL_SUBJECT, $email_message, $headers);
			if($mailSend) {
				echo '<p class="success">Thank you for taking the effort to get in touch with us.</p>';
			} else {
				echo '<p class="error">Message could not be sent. Mail Error</p>';
			}
	}   
}

// Function to sanitize input data
function sanitizeString($input)
{
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}
?>
