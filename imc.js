<meta charset="UTF-8">

<script>

	function pulaLinha() {

		document.write("<br>");
		document.write("<br>");
	}

	function mostra(frase) {

		document.write(frase);
		pulaLinha();
	}

	function calculoImc(altura, peso) {

		return peso / (altura * altura);
	}

	var nome = prompt("Informe seu nome");
	var alturaInformada = prompt(nome + ", informe sua altura");
	var pesoInformado = prompt(nome + ", informe seu peso");

	var imc = calculoImc(alturaInformada, pesoInformado);

	mostra(nome + ", seu IMC é " + imc);

	if(imc < 18.5) {

		mostra("Você está abaixo do recomendado");

	}

	if(imc > 35) {

		mostra("Você está acima do recomendado");
	}

	if(imc >= 18.5 && imc <= 35) {

		mostra("Seu IMC está excelente!");
	}

	</script>
