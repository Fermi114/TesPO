<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru');
    $mail->IsHTML(true);

    $mail->setFrom('info@op.gr', 'Помощник ТесПО');
    $mail->addAddress('bodiudaniil@bk.ru');
    $mail->Subject = 'Привет. Тебе письмо';

    $body = '<h1>Мега письмо!</h1>';

    /*if(trim(!empty($_POST['name']))){*/
    $body.='<p><strong>Имя </strong> '.$_POST['name'].'</p>';
    $body.='<p><strong>Почта</strong> '.$_POST['email'].'</p>';
    $body.='<p><strong>Сообщение</strong> '.$_POST['message'].'</p>';

    $mail->Body = $body;

    if(!$mail->send()){
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>