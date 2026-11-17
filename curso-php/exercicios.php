<?php
//exercicios

//1 
echo "juan\n";

//2
$nota1= 9;
$nota2= 5;
$nota3= 8;
$mediaDasNotas = ($nota1 + $nota2 + $nota3) / 3;
echo "$mediaDasNotas\n";

//3
$metros = 10;
$centimetros = $metros *100;
echo "$centimetros\n";

//4
$ano = 2024;
if (($ano %4 == 0 && $ano %100 !=0)|| $ano %400 ==0){
    echo "$ano é bissexto\n";
} else {
    echo "$ano não é bissexto\n";
}

$Celsius = 10; 
$Fahrenheit = $Celsius * 1.8 + 32;

$mensagem = "A temperatura de $Celsius é equivalente a $Fahrenheit Fahrenheit";

echo "$mensagem\n";

//5
for($contador=1; $contador <=100; $contador++){
    if($contador %2==1){
    echo ("$contador\n");
    }
}

//6
$altura = 170;
$peso = 66;
$imc = $peso/$altura;
echo "$imc\n";

//7
$hora = 10;
if ($hora > 6 && $hora < 12) {
    echo "Bom dia";
} elseif ($hora >= 12 && $hora < 18) {
    echo "Boa tarde";
} else {
    echo "Boa noite";
}

//AREA BEECROWND

$A = (float) fgets(STDIN);
$B = (float) fgets(STDIN);
$C = (float) fgets(STDIN);
$triangulo= ($A * $C)/2;
$circulo = 3.14159 * $C*$C;
$trapezio = (($A + $B)*$C)/2;
$quadrado = $B * $B;
$retangulo = $A *$B;
echo "TRIANGULO: " .number_format($triangulo, 3, '.', '').("\n");
echo "CIRCULO: " .number_format($circulo, 3, '.', '').("\n");;
echo "TRAPEZIO: " .number_format($trapezio, 3, '.', '').("\n");;
echo "QUADRADO: " .number_format($quadrado, 3, '.', '').("\n");;
echo "RETANGULO: " .number_format($retangulo, 3, '.', '') .PHP_EOL


?>
