var outputText = document.querySelector("#output")
var inputTxt = document.querySelector("#txt")
var button = document.querySelector("#btn")


var url ="https://api.funtranslations.com/translate/oldenglish.json"
function getTranslationURL(text){
    return url + "?" + "text=" + text
}
function geterror(error){
    console.log("error occured",error)
}
function clickeventhandler(){

    var txtInput = inputTxt.value;
    fetch(getTranslationURL(txtInput))

        .then(response => response.json())
        .then(json =>{
            var transtext =json.contents.translated;
            outputText.innerText = transtext;
        })
            
           
        .catch(geterror)
    };
    btn.addEventListener("click", clickeventhandler) //adding event listener

