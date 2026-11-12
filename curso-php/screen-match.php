<?php

echo "Bem vindo(a\t\t ao screen match!\n";

$nomeFilme = "Top Gun - Maverick";
$anoLancamento = $argv[1]??2022 ;
$somaDeNotas = 9+6+8+7.5+5;
$notaFilme = $somaDeNotas/5 ;
$planoPrime = true;
$incluidoNoPlano = $planoPrime || $anoLancamento < 2020;

echo "Nome do filme: ";
echo $nomeFilme;
echo "\n";
echo "Nota do filme: ";
echo $notaFilme;

echo "Nome do filme:".$nomeFilme ."\n";
echo "Nota do filme:$notaFilme\n";
echo "Ano de lançamento: $anoLancamento\n";
?>