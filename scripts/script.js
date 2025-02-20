// Sample data for recommendations
const recommendations = {
    beaches: [
      { name: "Maldives", image: "beach1.jpg", description: "Crystal-clear waters and white sandy beaches." },
      { name: "Bora Bora", image: "beach2.jpg", description: "A tropical paradise with overwater bungalows." }
    ],
    temples: [
      { name: "Angkor Wat", image: "temple1.jpeg", description: "A stunning ancient temple complex in Cambodia." },
      { name: "Golden Temple", image: "temple2.jpeg", description: "A sacred Sikh shrine in India." }
    ],
    cities: [
      { name: "Toronto", image: "city1.jpg", description: "A vibrant city with diverse culture and attractions." },
      { name: "Paris", image: "city2.jpg", description: "The city of love and iconic landmarks." }
    ]
  };
  
  // Function to display recommendations
  function displayRecommendations(type) {
    const section = document.getElementById("recommendations");
    section.innerHTML = ""; // Clear previous results
  
    recommendations[type].forEach(item => {
      const div = document.createElement("div");
      div.className = "recommendation";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      `;
      section.appendChild(div);
    });
  }
  
  // Function to handle search
  function searchRecommendations() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    if (input.includes("beach")) {
      displayRecommendations("beaches");
    } else if (input.includes("temple")) {
      displayRecommendations("temples");
    } else if (input.includes("toronto") || input.includes("paris")) {
      displayRecommendations("cities");
    } else {
      alert("No recommendations found. Try searching for beaches, temples, or cities.");
    }
  }
  
  // Handle contact form submission
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
  });