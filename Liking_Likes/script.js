var user1Likes = document.querySelector("#user-1-likes");
var user2Likes = document.querySelector("#user-2-likes");
var user3Likes = document.querySelector("#user-3-likes");
var likes = [0, 0, 0];


function changeLikes(element){
    console.log(element.id)
    if(element.id == "btn1"){
        likes[0]++;    
        user1Likes.innerHTML = `${likes[0]} like(s)`;
    }
    else if(element.id == "btn2"){
        likes[1]++;
        user2Likes.innerHTML = `${likes[1]} like(s)`;
    }
    else if(element.id == "btn3"){
        likes[2]++;
        user3Likes.innerHTML =`${likes[2]} like(s)`;
    }
    else{
        console.warn("This is an error");
    }
    console.log(likes)
}