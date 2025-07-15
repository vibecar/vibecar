const params = new URLSearchParams(window.location.search);
const brand = params.get("brand");

document.getElementById("brand-title").textContent = brand ? `${brand} Cars` : "Unknown Brand";

const cars = carData[brand];
const carList = document.getElementById("car-list");

if (cars && cars.length > 0) {
  cars.forEach(car => {
    const div = document.createElement("div");
    div.className = "car-card";
    div.innerHTML = `
      <img src="images/${car.image}" alt="${car.name}" />
      <h3>${car.name}</h3>
      <p><strong>Price:</strong> ${car.price}</p>
      <p><strong>Fuel:</strong> ${car.fuel}</p>
      <p><strong>Mileage:</strong> ${car.mileage}</p>
      <ul>${car.features.map(f => `<li>${f}</li>`).join('')}</ul>
    `;
    carList.appendChild(div);
  });
} else {
  carList.innerHTML = `<p style="color: red;">No cars found for ${brand}.</p>`;
}
