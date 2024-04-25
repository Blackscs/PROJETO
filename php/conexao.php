<?php

$conexao = new mysqli("localhost", "root", "root", "usuarios");     

if ($conexao -> connect_error) {        
     die("<script> console.log'Error'</script>" . $conexao->connect_error);     
}else{
    echo "Conectado com sucesso!<br>";
}

?>