const button = document.getElementById("search");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityname) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=ba960a5c9e024d35a04153436241906&q=${cityname}&aqi=no`
  );
  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  console.log(result);

  cityName.innerText = `${result.location.name} , ${result.location.region} , ${result.location.country}`;

  cityTime.innerText = ``;
});
