import  {useState} from "react";
import ReactDOM from "react-dom/client";


function MyForm() {
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    );

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    return (
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);