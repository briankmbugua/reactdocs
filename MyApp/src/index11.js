
function Car(props) {
    return (
       <li> i am {props.brand} car </li>
    );
}


function Garage() {
    let cars = ['Ford', 'BMW', 'AUDI']
    return (
        <>
        <h1>Who lives in my garage</h1>
        <ul>
            {cars.map((car) => <Car brand={car} />)}
        </ul>
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);