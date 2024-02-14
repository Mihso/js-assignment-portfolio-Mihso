async function getData() {
    const api = "https://api.github.com/users/Mihso";
    const response = await fetch(api);
    const data = await response.json();
    document.getElementById("profile").src = data.avatar_url;
}

getData();