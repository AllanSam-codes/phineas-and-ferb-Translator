var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector(".output")


var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function errorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server! try after some time")
}

function getTranslatorURL(input) {
    return serverURL + "?" + "text=" + input
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslatorURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputdiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btntranslate.addEventListener("click", clickHandler)