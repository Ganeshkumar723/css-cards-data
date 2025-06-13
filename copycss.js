
function copyCSS(button) {
  const cssCode = button.closest(".productsBox").querySelector(".cssCode").textContent;
  navigator.clipboard.writeText(cssCode)
    .then(() => {
      button.textContent = "Copied!";
      setTimeout(() => button.textContent = "Copy CSS", 1500);
    })
    .catch(err => {
      console.error("Copy failed:", err);
    });
}

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Show button on scroll
  window.addEventListener("scroll", () => {
    const btn = document.querySelector(".scrollTopBtn");
    if (window.scrollY > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });



  function filterCards() {
    const input = document.getElementById("searchBox").value.toLowerCase();
    const cards = document.querySelectorAll(".productsBlock");

    cards.forEach(card => {
      const cardText = card.innerText.toLowerCase();
      if (cardText.includes(input)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }



