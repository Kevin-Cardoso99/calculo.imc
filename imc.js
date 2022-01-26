<meta charset="UTF-8">

<script>

	function pulaLinha() {

		document.write("<br>");
		document.wirte("<br>");
	}

	function mostra(frase) {

		document.write(frase);
		pulaLinha();

	}

	function calculaImc(altura, peso) {

		return peso / (altura * altura);

	}

	var nome = prompt ("Informe seu nome")
	var alturaInformada = prompt(nome  + ", informe sua altura");
	var pesoInformado = prompt(nome + ", informe seu peso");

	var imc = calculaImc(alturaInformada, pesoInformado);

	document.write(nome + ",  O seu imc  é " + imc);
	</script>
