import React from 'react';

const api = {
  key: "04f5294ce518461a0092949c6a2506f6",
  base: "https://home.openweathermap.org/data/2.5/"
};


function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August",
                  "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    console.log(d.getDay());

    return `${day} ${date} ${month} ${year}`

  }


  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <input 
            type='text'
            className='search-bar'
            placeholder='Search...'
          />
        </div>
        <div className='location-box'>
          <div className='location'>Ha Noi City, VN</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>
            29°C
          </div>
          <div className='weather'>Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
