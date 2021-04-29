const scraper = document.querySelector("#scrape-acct")
const loading = document.querySelector(".loading")
const username = document.querySelector("#ig-username")
const isVerified = document.querySelector("#is-verified")
const inputForm = document.querySelector("#input-field")
const resultForm = document.querySelector(".result-form")


scraper.addEventListener("click", (e) => {
    if(username.value != ""){
        e.preventDefault()
        inputForm.style.display = "none"
        loading.style.display = "block"

        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "username": username.value
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("/scrape", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result, typeof result)
            loading.style.display = "none"
            resultForm.style.display = "block"
            followers.innerHTML = result.followers
            following.innerHTML = result.following
            fullname.innerHTML = result.full_name
            user_name.innerHTML = result.username

        })
        .catch(error => console.log('error', error));

    }
})

const followers = document.getElementById("followers")
const following = document.getElementById("following")
const fullname = document.getElementById("full-name")
const user_name = document.getElementById("username")




setInterval(() => {
    if(isVerified.innerText.slice(0, 5) === "false"){
        isVerified.innerHTML = 'false <i class="verify fas fa-times-circle"></i>'
    }
    else{
        isVerified.innerHTML = 'true <i class="verify fas fa-check-circle"></i>'
    }
}, 500);

