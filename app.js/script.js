function goToHome() {
    window.location.href = 'index.html';
}

document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchStudent();
        event.preventDefault();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.querySelector('.search-container');
    searchContainer.style.opacity = "1";
});

function searchStudent() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const name = card.querySelector("h3").innerText.toLowerCase();
        if (name.includes(searchInput)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    // Sembunyiin tombol Home, tampilkan tombol Back
    document.getElementById("homeButton").style.display = "none";
    document.getElementById("backButton").style.display = "flex";
}

function showAllCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.display = "block";
    });

    // Tampilkan tombol Home, sembunyiin tombol Back
    document.getElementById("backButton").style.display = "none";
    document.getElementById("homeButton").style.display = "flex";
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});

const scrollUpBtn = document.getElementById("scrollUpBtn");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        scrollUpBtn.style.display = "flex";
        scrollUpBtn.style.opacity = "1";
        scrollUpBtn.style.transform = "translateY(0)";
        scrollUpBtn.classList.add("active");
    } else {
        scrollUpBtn.style.opacity = "0";
        scrollUpBtn.style.transform = "translateY(20px)";
        scrollUpBtn.classList.remove("active");
        setTimeout(() => {
            scrollUpBtn.style.display = "none";
        }, 300);
    }
});

scrollUpBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
