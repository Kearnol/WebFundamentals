function changeUserName(){
    console.log(document.querySelector("#userName").innerHTML)
document.querySelector("#userName").innerHTML = "The Kearnol"
}

function removeConnection(element){
    element.parentNode.parentNode.remove();
}

var yourConnections = 500
function addToConnections(){
    yourConnections++;
    document.querySelector("#yourConnectionsBadge").innerHTML = yourConnections;
}

var connectionRequests = 2
function decreaseConnections(){
    connectionRequests--;
    document.querySelector("#conReqBadge").innerHTML = connectionRequests;
}