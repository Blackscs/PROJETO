<?php

use PSpell\Config;

include ("conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];
    $genero = $_POST["genero"];

$query = "INSERT INTO usuario (email, genero, nome, senha) VALUES ('$email', '$genero', '$nome','$senha')"; 

$result = $conexao->query($query);

print_r($result);

mysqli_close($conexao);

}
?>