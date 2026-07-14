const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
window.addEventListener('mousemove', event => { mouseX = event.clientX; mouseY = event.clientY; dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`; });
function animateCursor() { ringX += (mouseX - ringX) * .16; ringY += (mouseY - ringY) * .16; ring.style.transform = `translate(${ringX - 17}px, ${ringY - 17}px)`; requestAnimationFrame(animateCursor); }
animateCursor();
document.querySelectorAll('a, button, summary, input, select').forEach(el => { el.addEventListener('mouseenter', () => ring.classList.add('hover')); el.addEventListener('mouseleave', () => ring.classList.remove('hover')); });
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .16 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.querySelectorAll('details').forEach(detail => detail.addEventListener('toggle', () => detail.querySelector('summary span').textContent = detail.open ? '−' : '+'));
document.querySelector('.menu-button').addEventListener('click', () => { const nav = document.querySelector('.nav nav'); nav.classList.toggle('open'); });


const form = document.getElementById("registration-form");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
        window.location.href = "thank-you.html";
    } else {
        alert("Something went wrong. Please try again.");
    }
});

const scriptURL = "https://script.google.com/macros/s/AKfycbxpYrc_9OHJoj3zKn2dLVeo2rNaK8RQnZBC1hOl7aiO_HYkIhjhmlc8c9hAwyPObO6CGw/exec";


document
    .getElementById("registration-form")
    .addEventListener("submit", e => {

        e.preventDefault();


        const data = {

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            grade: document.getElementById("grade").value,

            parent_name: document.getElementById("parent_name").value,

            parent_email: document.getElementById("parent_email").value,

            parent_phone: document.getElementById("parent_phone").value

        };


        fetch(scriptURL, {

            method: "POST",

            body: JSON.stringify(data)

        })

            .then(() => {

                window.location.href = "thank-you.html";

            })

            .catch(error => {

                console.error(error);

                alert("Registration failed");

            });

    });