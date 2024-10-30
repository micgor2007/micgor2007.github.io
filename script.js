let i = 0;
let czyDzik = false;
let par = document.querySelector("#par");
let img = document.querySelector("#john");
img.style.visibility = 'hidden';

setInterval(Dzik, 1000);

function hideParagraph() {
    par.style.display = "none";
}

function showBigJohn() {
    img.style.visibility = 'visible';
}

function Dzik() {
    par.innerHTML += " " + i; 
    czyDzik = (i % 7 === 0 || String(i).includes('7')) && i !== 0; 

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            if (czyDzik) {
                handleDzik(); 
            } else {
                handleNotDzik(); 
            }
        }
    }, { once: true });

    i++; // 
}

function handleDzik() {
    let content = par.innerHTML;
    const lastIndex = content.lastIndexOf(" " + (i - 1)); 

    if (lastIndex !== -1) {
        par.innerHTML = content.slice(0, lastIndex) + ' <img src="dzik.jpg" alt="Dzik">';
    }
}

function handleNotDzik() {
    showBigJohn();
    hideParagraph();
}
