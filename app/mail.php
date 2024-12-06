<?php
// Файли phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Тема листа";
$file = $_FILES['file'];

$c = true;
// Формування самого листа
$title = "Заголовок листа";
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width: 100%;'>$body</table>";

// Налаштування PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // Налаштування вашої пошти
  $mail->Host       = 'smtp.gmail.com'; // SMTP сервер вашої пошти
  $mail->Username   = ''; // Логін на пошті
  $mail->Password   = ''; // Пароль на пошті
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('', 'Заявка з вашого сайту'); // Адреса самої пошти та ім’я відправника

  // Отримувач листа
  $mail->addAddress('');

  // Прикріплення файлів до листа
  if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
      $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
      $filename = $file['name'][$ct];
      if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
          $mail->addAttachment($uploadfile, $filename);
          $rfile[] = "Файл $filename прикріплено";
      } else {
          $rfile[] = "Не вдалося прикріпити файл $filename";
      }
    }
  }

  // Відправка повідомлення
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();

} catch (Exception $e) {
  $status = "Повідомлення не було відправлено. Причина помилки: {$mail->ErrorInfo}";
}
?>
