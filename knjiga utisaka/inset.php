<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "insert";


$conn = mysqli_connect($servername, $username, $password, $dbname);
$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

if (isset($_POST['name'], $_POST['email'], $_POST['comment'])) {
  
  if (empty($name) || empty($email) || empty($comment)) {
    echo "Morate popuniti sva polja";
  } else {

  $sql = "INSERT INTO form1 ( ime, email, comment) VALUES ('$name', '$email', '$comment')";
  if (mysqli_query($conn, $sql)) {
    echo "Vaš komentar je unet u našu bazu.<br> Hvala na komentaru <br><br>";
    echo"Uneli ste ime: ";
    print_r($name);
    echo"<br>";
    echo"Uneli ste email: ";
    print_r($email);
    echo"<br>";
    echo"Vaš komentar je: ";
    print_r($comment);
  } else {
    echo "Greska: " . mysqli_error($conn);
    }
  }
}
?>