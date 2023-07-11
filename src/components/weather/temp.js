import React, { useEffect, useState } from 'react'
import Weathercard from './weathercard'
import "./style.css"

const Temp = () => {

    const [searchValue, setSearchValue] = useState("Bhopal")
    const [tempInfo, setTempInfo] = useState({})

    
    const getWeatherInfo = async () => {
        // alert("you can search for your own place in the search bar 😁")

        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=9c1ac1e3d45373f646c495e74bf19cdf`
            let res = await fetch(url);
            let data = await res.json();
            // console.log(data)
            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset, sunrise } = data.sys

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
                sunrise
            }

            setTempInfo(myNewWeatherInfo);

        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        // alert("you can search for your own place in the search bar 😁")
        getWeatherInfo();
    }, [])


    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder='search...' id='search' className='searchTerm' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} autoFocus />

                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>


                </div>
                <p>you can search for your own place in the search bar 😁</p>
            </div>

            {/* temperature card */}
            <Weathercard tempInfo={tempInfo} />

        </>
    )
}

export default Temp