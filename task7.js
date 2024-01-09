/**
Потрібно реалізувати логіку, яка буде формувати 2 випадаючих списки.
У першому містяться назви країн, у другому – назви міст.
Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку
певна країна - в правому випадаючому списку з'являлися міста цієї країни.
Список міст формується динамічно, через JavaScript.
Також потрібно нижче в параграфі вивести назву обраної країни і місто.
Спробуйте не вносити зміни в html файл.
 */



document.addEventListener('DOMContentLoaded', function () {
    const countrySelect = document.getElementById('country');
    const citiesSelect = document.getElementById('cities');
    const paragraph = document.querySelector('p');
  
    const citiesData = {
      ger: ['Berlin', 'Munich', 'Hamburg'],
      usa: ['New York', 'Los Angeles', 'Chicago'],
      ukr: ['Kyiv', 'Lviv', 'Odesa'],
    };
  
    function updateCities() {
      const selectedCountry = countrySelect.value;
      const selectedCities = citiesData[selectedCountry] || [];
  
      citiesSelect.innerHTML = '';
  
      selectedCities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citiesSelect.appendChild(option);
      });
  
      paragraph.textContent = `Selected Country: ${countrySelect.options[countrySelect.selectedIndex].text}, Selected City: ${citiesSelect.value}`;
    }
  
    updateCities();
  
    countrySelect.addEventListener('change', updateCities);
});