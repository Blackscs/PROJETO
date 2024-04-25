<?php

include ("conexao.php");

if ($_SERVER["REQUEST_METHOD"] = "POST"){
    // recebendo informações
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // $mario = "mario";
    // $mario = password_hash($mario, PASSWORD_BCRYPT);
    // echo $mario . "<br>";
  
    // $mario = "mario";
    // $mario = password_hash($mario, PASSWORD_BCRYPT);
    // echo $mario . "<br>";
  
    // $mario = "mario";
    // $mario = password_hash($mario, PASSWORD_BCRYPT);
    // echo $mario . "<br>";
    
    $query_email = "SELECT * FROM usuario WHERE email = '{$email}'"; 
    $query_senha = "SELECT * FROM usuario WHERE senha = '{$senha}'";

    $result_email = $conexao->query($query_email);
    $result_senha = $conexao->query($query_senha); 

    $row_email = mysqli_num_rows($result_email); 
    $row_senha = mysqli_num_rows($result_senha); 
    
    if (!$row_email or !$row_senha) {
        echo 'Email ou senhas incorretos!';
        echo "<script> location.href='../html/login.html?validar=false' </script>";
    } else {
        header('location:../html/index.html');
    };
  
    print_r($result);

    mysqli_close($conexao);
}
?>