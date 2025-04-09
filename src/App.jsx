import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Fbutton from "./components/button";

function App() {
    //const
    const [inputText, setInputText] = useState();
    const [weather, setWeather] = useState();
    const [loading, setLoading] = useState(true);
    //React
    useEffect(() => {
        axios
            .get(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=Lisboa&aqi=no`)
            .then((data) => {
                setWeather(data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
                // Mostre uma mensagem de erro para o usuário
            });
    }, []);
    //handlers
    const showTextInput = (e) => {
        setInputText(e.target.value);
    };
    const handleEvent = () => {
        console.log("ei");
    };

    const handlerSetLocation = () => {
        axios
            .get(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${inputText}&aqi=no`)
            .then((data) => {
                setWeather(data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
                // Mostre uma mensagem de erro para o usuário
            });
    };

    return (
        <div>
            <div>
                <h2>Wetaher App</h2>
            </div>

            {loading && <p>Loading...</p>}

            {weather && (
                <>
                    <h3>{weather.location.name}</h3>
                    <img src={weather.current.condition.icon} alt="" />
                    <h4>{weather.current.condition.text}</h4>

                    <h4>{weather.current.temp_c}º</h4>
                </>
            )}

            <div className="input-wrapper">
                <input placeholder="choose a city" type="text" onChange={showTextInput} />
                <button onClick={handlerSetLocation}>Send Location</button>
            </div>
            <Fbutton onClick={handleEvent} className={"test"} children={"take on me"} />
        </div>
    );
}

export default App;
