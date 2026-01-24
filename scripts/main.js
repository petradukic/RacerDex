const yearSpan = document.getElementById("year");
const currentDate = new Date();
yearSpan.innerText = currentDate.getFullYear();

const search = document.getElementById("search");
const filter = document.getElementById("filter-team");
const cards = document.querySelectorAll("#drivers-grid .card")

function applyFilters() {
    const text = search.value.toLowerCase();
    const team = filter.value;

    cards.forEach(card => {
        const name = card.querySelector("h3").textContent.toLowerCase();
        const cardTeam = card.querySelector(".sub").textContent;

        const match = name.includes(text) && (!team || cardTeam === team);

        card.style.display = match ? "flex" : "none";
    });
}

if (search) search.addEventListener("input", applyFilters);
if (filter) filter.addEventListener("change", applyFilters);