
const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

const initLike = 34;
const initDislike = 6;


let likeCount = initLike;
let dislikeCount = initDislike

likeBtn.innerText = "👍 " + initLike;
dislikeBtn.innerText = "👎 " + initDislike;



function handleLike() {
    likeCount++;
    likeBtn.innerText = "👍 " + likeCount;
    disabledButtons();
    setCookie();
}

function handleDislike() {

    dislikeBtnCount++;
    dislikeBtn.innerText = "👎 " + dislikeCount;
    disabledButtons();
    setCookie();

}
function disabledButtons(){
    likeBtn.disabled = true;
    dislikeBtn.disabled = true;
}

function setCookie() {
    document.cookie = "voted=true; SameSite=Strict; Max-Age=60"
}