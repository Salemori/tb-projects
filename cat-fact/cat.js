const getFacts = new Promise((response, reject) => {
    // preventDefault();
    const req = new XMLHttpRequest();
     req.open("GET", "https://catfact.ninja/fact");
    // req.open("GET", "https://catfact.ninja/facts?limit=5&max_length=20");
    req.send();
    req.responseType = "json";
    req.onload = () => response(req.response);
    req.onerror = () => reject(req.statusText);
})

// getFacts.then(result => console.log(result)).catch(err => console.log(err));
function getCatFacts(){
    info = document.getElementById("info");
    getFacts.then(result =>        
        info.textContent = result.fact
    ).catch(err => console.log(err));
    info.style.backgroundColor = "#572661f1"
}

function clearFacts()
{
    location.reload();
}

