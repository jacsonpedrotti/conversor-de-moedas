const botaoConverter = document.querySelector(".button")
const converterDe = document.querySelector(".converter-de")
const converterPara = document.querySelector(".converter-para")

 async function converterValores() {

    const inputValor2 = document.querySelector("input").value
    const inputValor = (inputValor2.replace(",", "."))
    const valorConverter = document.querySelector(".valor-converter")
    const valorConvertido = document.querySelector(".valor-convertido")

    const ratesUrl = 'BRL-USD,USD-BRL,AUD-BRL,CAD-BRL,EUR-BRL,CHF-BRL,CNY-BRL,JPY-BRL,GBP-BRL,ARS-BRL,BTC-BRL,ETH-BRL,LTC-BRL'
    const rates = `https://economia.awesomeapi.com.br/last/${ratesUrl}`
    const data = await fetch(rates).then(response => response.json())

    console.log(data)

    let total = 1
    const dolarUsValor = data.USDBRL["bid"]
    const euroValor = data.AUDBRL["bid"]
    const libraValor = data.GBPBRL["bid"]
    const pesoValor = data.ARSBRL["bid"]
    const realValor = 1
    const bitcoinValor = data.BTCBRL["bid"]
    const ethereumValor = data.ETHBRL["bid"]
    const litecoinValor = data.LTCBRL["bid"]



    if (converterDe.value == "dolar") {
        valorConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor)
        total = inputValor * dolarUsValor
    }

    if (converterDe.value == "euro") {
        valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor)
        total = inputValor * euroValor
    }

    if (converterDe.value == "libra") {
        valorConverter.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GPB"
        }).format(inputValor)
        total = inputValor * libraValor
    }

    if (converterDe.value == "peso") {
        valorConverter.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValor)
        total = inputValor * pesoValor
    }

    if (converterDe.value == "real") {
        valorConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor)
        total = inputValor * realValor
    }

    if (converterDe.value == "bitcoin") {
        valorConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValor)
        total = inputValor * bitcoinValor
    }

    if (converterDe.value == "ethereum") {
        valorConverter.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "ETH"
        }).format(inputValor)
        total = inputValor * ethereumValor
    }


    if (converterDe.value == "litecoin") {
        valorConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "LTC"
        }).format(inputValor)
        total = inputValor * litecoinValor
    }


    if (converterPara.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency:"USD"
        }).format(total / dolarUsValor)
    }

    if (converterPara.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency:"EUR", 
        }).format(total / euroValor)
    }


    if (converterPara.value =="libra") {
        valorConvertido.innerHTML= new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency:"GPB"
        }).format(total / libraValor)
    }

    if (converterPara.value == "peso") {
        valorConvertido.innerHTML = new Intl.NumberFormat("es-AR",{
            style: "currency",
            currency:"ARS"  
        }).format(total / pesoValor)
    }

    if (converterPara.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style : "currency",
            currency :"BRL"
        }).format(total / realValor)
    }

    if (converterPara.value == "bitcoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style : "currency",
            currency:"BTC"
        }).format(total / bitcoinValor)
    }

    if (converterPara.value == "ethereum") {
        valorConvertido.innerHTML = new Intl.NumberFormat ("ru-RU", {
            style: "currency",
            currency: "ETH"
        }).format(total / ethereumValor)
    }

    if (converterPara.value == "litecoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency:"LTC"
        }).format(total / litecoinValor)
    }

}

function changeConverterDe(){
    const trocarImgConverter = document.querySelector(".imagem-converter")
    const trocarTextConverter = document.querySelector(".texto-converter")

    if (converterDe.value =="dolar") {
        trocarImgConverter.src = "assets/logo-usa.png"
        trocarTextConverter.innerHTML = "Dólar americano"
    }

    if (converterDe.value == "euro") {
        trocarImgConverter.src = "assets/logo-euro.png"
        trocarTextConverter.innerHTML = "Euro"
    }

    if (converterDe.value == "libra") {
        trocarImgConverter.src = "assets/libra-logo.png"
        trocarTextConverter.innerHTML = "Libra esterlina"
    }

    if (converterDe.value == "peso") {
        trocarImgConverter.src = "assets/argentina.png"
        trocarTextConverter.innerHTML = "Peso argentino"
    }

    if (converterDe.value == "real") {
        trocarImgConverter.src = "assets/logo-real.png"
        trocarTextConverter.innerHTML = "Real"
    }

    if (converterDe.value == "bitcoin") {
        trocarImgConverter.src = "assets/bitcoin-logo.png"
        trocarTextConverter.innerHTML = "Bitcoin"
    }

    if (converterDe.value == "ethereum") {
        trocarImgConverter.src = "assets/ethereum.png"
        trocarTextConverter.innerHTML = "Ethereum"
    }

    if (converterDe.value == "litecoin") {
        trocarImgConverter.src = "assets/litecoin.png"
        trocarTextConverter.innerHTML = "Litecoin"

    }

    converterValores()
}

function changeConverterPara() {
    const trocarImgConvertida = document.querySelector(".imagem-convertida")
    const trocarTextoConvertido = document.querySelector(".texto-convertido")

    if (converterPara.value == "dolar") {
        trocarImgConvertida.src = "assets/logo-usa.png"
        trocarTextoConvertido.innerHTML = "Dólar americano"
    }

    if (converterPara.value == "euro") {
        trocarImgConvertida.src ="assets/logo-euro.png"
        trocarTextoConvertido.innerHTML = "Euro"
    }

    if (converterPara.value == "libra") {
        trocarImgConvertida.src = "assets/libra-logo.png"
        trocarTextoConvertido.innerHTML = "Libra esterlina"
    }

    if (converterPara.value == "peso") {
        trocarImgConvertida.src = "assets/argentina.png"
        trocarTextoConvertido.innerHTML = "Peso argentino"
    }

    if (converterPara.value == "real") {
        trocarImgConvertida.src = "assets/logo-real.png"
        trocarTextoConvertido.innerHTML = "Real"
    }

    if(converterPara.value == "bitcoin") {
        trocarImgConvertida.src = "assets/bitcoin-logo.png"
        trocarTextoConvertido.innerHTML = "Bitcoin"
    }

    if (converterPara.value =="ethereum") {
        trocarImgConvertida.src = "assets/ethereum.png"
        trocarTextoConvertido.innerHTML = "Ethereum"
    }

    if (converterPara.value == "litecoin") {
        trocarImgConvertida.src = "assets/litecoin.png"
        trocarTextoConvertido.innerHTML = "Litecoin"
    }

    converterValores()
}

converterDe.addEventListener("change", changeConverterDe)
converterPara.addEventListener("change", changeConverterPara )
botaoConverter.addEventListener("click", converterValores)