<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

$hyphaadmin = "########";

switch($_GET['type'])
{
    case 'newsletter':
    {
        //Send to Admin:
        $m['subject'] = "New Newsletter Sign Up from Website";
        $m['body']    = "Hey Hypha, there's a new sign up on the website!<br /><br />".$_POST['subscribe-email'];
        $m['to']      = $hyphaadmin;
        sendmail($m);
        
        //Send to User:
        $m['subject'] = "Greetings from hypha";
        $m['body']    = "Hello and welcome to hypha!<br /><br />As a subscriber, you will have access to our exclusive content, monthly giveaways & more.<br /><br />Our growth is an ongoing process and we appreciate your decision to become a part of it. Hopefully we will be a critical part of yours as well.<br /><br />We’re excited to take this journey with you and if you have any morel dilemmas we can solve, please feel free to reply to this email. <br /><br />###### ####<br />Co-founder & CEO<br />hypha Inc.";
        $m['to']      = $_POST['subscribe-email'];
        sendmail($m);    
    }
    break;
    case 'contact':
    {
        //Send to Admin:
        $m['subject'] = "New Contact Request from Website";
        $m['body']    = "Hey Hypha, there's a new contact request from the website!<br /><br />Name: ".$_POST['name']."<br /><br />Email: ".$_POST['email']."<br /><br />Message: ".$_POST['message'];
        $m['to']      = $hyphaadmin;
        sendmail($m);
        
        //Send to User:
        $m['subject'] = "Thank you for contacting us!";
        $m['body']    = "Hi there and thanks for reaching out,<br /><br />We value your input and a member of our team will be contacting you soon.<br /><br />Included below is a copy of your query<br /><br /><br /><br />Name: ".$_POST['name']."<br /><br />Email: ".$_POST['email']."<br /><br />Message: ".$_POST['message']." - Customer Support";
        $m['to']      = $hyphaadmin;
        sendmail($m);
    }
    break;
}
echo 'success';
exit;


function sendmail($m)
{
    $mail = new PHPMailer(true);                                // Passing `true` enables exceptions
        //Server settings
        $mail->isSMTP();                                        // Set mailer to use SMTP
        $mail->Host       = 'smtp.gmail.com';                   // Specify main and backup SMTP servers
        $mail->SMTPAuth   = true;                               // Enable SMTP authentication
        $mail->Username   = 'info@hypha.ca';      // SMTP username
        $mail->Password   = '########';                         // SMTP password
        $mail->SMTPSecure = 'ssl';                              // Enable TLS encryption, `ssl` also accepted
        $mail->Port       = 465;                                // TCP port to connect to

        //Recipients
        $mail->setFrom('info@hypha.ca', 'The hypha Team');
        $mail->addAddress($m['to']);                            // Add a recipient
        $mail->addReplyTo('info@hypha.ca');
        
        //Content
        $mail->isHTML(true);                                   // Set email format to HTML
        $mail->Subject = $m['subject'];
        $mail->Body    = $m['body'];
        $mail->AltBody = $m['altbody'];
        if($mail->send()){
            return true;
        }
        else{
            return false;
        }
}