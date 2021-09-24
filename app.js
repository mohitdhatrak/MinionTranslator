var translateButton = document.querySelector("#translate-button");
var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");

var url = "https://api.funtranslations.com/translate/minion.json";

function clickListner() {
    var customUrl = url + "?text=" + inputText.value;
    fetch(customUrl)
        .then((resp) => resp.json())
        .then((data) => (outputText.innerText = data.contents.translated))
        .catch((error) => {
            outputText.innerText =
                "Some error occured, please try again later.";
            console.log(error);
        });
}

translateButton.addEventListener("click", clickListner);
