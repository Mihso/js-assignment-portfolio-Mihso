async function getData() {
    const api = "https://api.github.com/users/Mihso";
    const response = await fetch(api);
    const data = await response.json();
    document.getElementById("gitStory").innerHTML = data.bio;
    document.getElementById("profile").src = data.avatar_url;
    document.getElementById("gitHub").href = data.html_url;
    document.getElementById("lastOn").innerHTML = data.updated_at;
}

getData();

function activate(){
    console.log("done");
    document.getElementById("animate").style.animation = "first 4s 1";

}

function deactivate(){
    document.getElementById("animate").style.animation = "none";
}

addEventListener("animationend", deactivate);