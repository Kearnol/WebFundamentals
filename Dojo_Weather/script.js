function hide(element) {
    element.parentNode.remove();
}

function loadingAlert() {
    alert("One moment while we load the weather for you.");
}

var temp = "c"

function changeTempType(element) {
    var tempHigh = document.querySelectorAll(".tempHigh");
    var tempHighClean= [];
    for(i=0; i<tempHigh.length; i++){
        tempHighClean.push(tempHigh[i].innerText);
    }

    var tempLow = document.querySelectorAll(".tempLow");
    var tempLowClean = [];
    for(i=0; i<tempLow.length; i++){
        tempLowClean.push(tempLow[i].innerHTML);
    }
    console.log('temp highs =' +tempHighClean);
    console.log('temp lows =' +tempLowClean);
    
    if (element.id == "fahrenheit" && temp == "c") {
        for (i = 0; i < tempHighClean.length; i++) {
            tempHigh[i].innerText = Math.floor(tempHighClean[i] / 5 * 9 + 32);
        }
        for (i = 0; i < tempLowClean.length; i++) {
            tempLow[i].innerText = Math.floor(tempLowClean[i] / 5 * 9 + 32);
        } 
        console.log("In farhenheit, tempHigh = " +tempHighClean);
        console.log("In farhenheit, tempLow = " +tempLowClean);
        temp = "f";
    }
    if (element.id == "celcius" && temp == "f"){
        for (i = 0; i < tempHighClean.length; i++) {
            tempHigh[i].innerText = Math.floor((tempHighClean[i] - 32) * 5 / 9);
        }
        for (i = 0; i < tempLowClean.length; i++) {
            tempLow[i].innerText = Math.floor((tempLowClean[i] - 32) * 5 / 9);
        } 
        temp = "c";
    }
}

