const URL = "https://api.openweathermap.org/data/2.5/";

const container = document.getElementById("activity");

// callApi();

const fetchData = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    container.innerText = data.activity;
    console.log(data);
  } catch (error) {
    container.innerText = error;
  }
};
fetchData();
