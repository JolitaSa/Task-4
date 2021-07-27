/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const resultDiv = document.getElementById("output");

class CarCard {
  constructor(car) {
    this.brand = car.brand;
    this.models = car.models;
  }
  render() {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");

    h2.textContent = `${this.brand} models: `;
    this.models.forEach((element) => {
      const li = document.createElement("li");
      li.textContent = element;
      ul.appendChild(li);
    });

    div.append(h2, ul);
    div.style =
      "margin-top: 10px; padding: 20px; border-radius: 5px; background-color: #B3C191;";
    return div;
  }
}

function getCars() {
  return fetch(ENDPOINT)
    .then((res) => res.json())
    .then((cars) => {
      cars.forEach((car) => {
        const carCard = new CarCard(car);
        resultDiv.appendChild(carCard.render());
      });
    })
    .catch((err) => {
      throw new Error(err);
    });
}

getCars();
