var translateButton = document.querySelector("#translate-button");
var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");

var url = "https://api.funtranslations.com/translate/minion.json";

function clickListner() {
    if (inputText.value === "") {
        outputText.innerText = "Please enter some text.";
    } else {
        var customUrl = url + "?text=" + inputText.value;
        fetch(customUrl)
            .then((resp) => resp.json())
            .then((data) => {
                if (data.error?.code == 429)
                    outputText.innerText =
                        "You can only translate 5 times in 1 hour, please try after 1 hour";
                else outputText.innerText = data.contents.translated;
            })
            .catch((error) => {
                outputText.innerText =
                    "Some error occured, please try again later.";
                console.log(error);
            });
    }
}

translateButton.addEventListener("click", clickListner);
