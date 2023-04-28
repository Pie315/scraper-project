async function fetchAsync(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function clicked() {
    const output = document.querySelector(".output")
    console.log("clicked")
    output.textContent = fetchAsync("https://www.google.com");
}

const button = document.querySelector(".run");
button.addEventListener("click", clicked());

