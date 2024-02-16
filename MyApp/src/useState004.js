import  {useState} from "react";
import ReactDOM from "react-dom/client";


function Car() {
    const [car, setCar] = useState({
        brand: "Fordd",
        model: "Mustang",
        year: "1964",
        color: "red"
    })

    const updateColor = () => {
        setCar(previousState => {
            return {...previousState, color: "blue" }
        })
    }

    return(
        <>
        <h1>My {car.brand}</h1>
        <p>
            it is a {car.color} {car.model} from {car.year}
        </p>
        <button type="button" onClick={updateColor}>blue</button>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);