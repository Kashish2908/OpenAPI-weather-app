import React, { useEffect, useState } from 'react'

const Weathercard = ({ tempInfo }) => {
    const [weatherState, setWeatherState] = useState("")
    // destructuring
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
        sunrise
    } = tempInfo

    useEffect(() => {

        if (weathermood) {
            switch (weathermood) {
                case "Rain": setWeatherState("wi-showers")
                    break;
                case "Clouds": setWeatherState("wi-day-cloudy")
                    break;
                case "Haze": setWeatherState("wi-fog")
                    break;
                case "Clear": setWeatherState("wi-day-sunny")
                    break;
                case "Mist": setWeatherState("wi-dust")
                    break;


                default:
                    setWeatherState("wi-cloud")
                    break;
            }

        }

    }, [weathermood])

    // converting the seconds of sunset into time
    let sec = sunset;
    let date = new Date(sec * 1000)
    let timeStr = `${date.getHours()}:${date.getMinutes()}`
    // console.log(timeStr)

    // rounding off temperature
    let newTemp = temp;
    let tempRounded = Math.round(newTemp);
    // console.log(tempRounded)


    return (
        <>

            <article className='widget'>
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{tempRounded}&deg;C</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">
                            {weathermood}
                        </div>
                        <div className="place">
                            {name}, {country}
                        </div>
                    </div>

                </div>

                <div className="date">{new Date().toLocaleString()}</div>

                {/* our 4 column section */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className='extra-info-leftside'>
                                {timeStr} <br />
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className='extra-info-leftside'>
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-rain-wind"}></i></p>
                            <p className='extra-info-leftside'>
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className='extra-info-leftside'>
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>

                </div>
            </article>
        </>
    )
}

export default Weathercard