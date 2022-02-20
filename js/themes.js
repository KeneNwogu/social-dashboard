let body = document.body;
let toggle_text = document.querySelector('.toggle-text');
let toggle_btn = document.querySelector('#switch');

toggle_btn.addEventListener('click', () => {
    // toggle theme
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    if(body.classList.contains('dark-theme')) toggle_text.innerHTML = "Dark Mode"
    else {
        toggle_text.innerHTML = "Light Mode"
    }
})