async function getInfo() {
    var response = await fetch("https://www.haloapi.com/metadata/h5/metadata/maps", {
        method: "GET",
        headers: {
            "Accept-Language": "en",
            "Ocp-Apim-Subscription-Key": "f2e391b6ca604cc890dc2dd3912d9e07"
        }
    });
    var mapData = await response.json();
    console.log(mapData);
    displayMapInfo(mapData);
}

function displayMapInfo(data) {
    var input = document.querySelector("#mapRequest").value
    console.log(input);
    var content = document.querySelector("#mapInfo");
    var mapNames = [];
    for (i = 0; i < data.length; i++) {
        mapNames.push(data[i].name)
        if (data[i].name == `${input}`) {
            content.innerHTML =
            `<h3>${data[i].name}</h3>
            <span class="inline"><h4>Description:</h4></span>
            <span class="inline"><p>${data[i].description}</p></span>
            <p><em>Supported Game Modes: ${data[i].supportedGameModes}<p><em>
            <img src="${data[i].imageUrl}" alt="image of map">`
            return
        }
        else {
                content.innerHTML = 
                    `<p class='errorP'>Sorry that is not a valid H5 map. Remember that map names must be spelled correctly <em>and</em> have propper capitalization. Try clicking on a name in the <strong>Map Bank 👈</strong> to place it in the search bar.</p>
                    <img src='assets/H1V7.gif' alt='halo 5 spartans high-fiving'>`
            }
            console.log(data[i].name, input)
        }
        console.log(mapNames);
}

function pushName(element) {
    var input = document.querySelector("#mapRequest");
    console.log(input);
    console.log(element.innerText);    
    input.value = element.innerText;
    console.log(input.value)
}

// async function getPlayerInfo() {
//     var response = await fetch("https://www.haloapi.com/metadata/h5/metadata/maps", {
//         method: "GET",
//         headers: {
//             "Accept-Language": "en",
//             "Ocp-Apim-Subscription-Key": "f2e391b6ca604cc890dc2dd3912d9e07"
//         }
//     });
//     var mapData = await response.json();
//     console.log(mapData);
//     displayMapInfo(mapData);
// }