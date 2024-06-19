const button = document.getElementById("search");
const input = document.getElementById("city-input");

async function getData(cityname) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=ba960a5c9e024d35a04153436241906&q=${cityname}&aqi=no`
  );
  return await promise.json();
}

button.addEventListener("click", () => {
  const value = input.value;
  getData(value);
});
