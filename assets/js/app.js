const toggleInOut = document.querySelector('#toggleInOut');
const addDefinition = document.querySelector('#addDefinition');
const likeButtons = document.querySelectorAll('.btn-like');

// Toggle Login / Logout
toggleInOut.addEventListener('click', (e) => {
    if(e.target.innerText === "Login") {
        e.target.innerText = "Logout";
    } else {
        e.target.innerText = "Login";
    }   
});

// Remove Add Definition
addDefinition.addEventListener('click', (e) => {
    addDefinition.remove();
});

// Alert on Like click
for (const button of likeButtons) {
    button.addEventListener('click', () => {
        alert("Ninja was liked");
    });
}