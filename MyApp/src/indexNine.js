import ReactDOM from 'react-dom/client'

function MadeGoal() {
    return (
        <h2>You scored</h2>
    )
};

function MissedGoal() {
    return (
        <h2>You Missed</h2>
    )
}


function Goal(props) {
    const isGoal = props.isGoal;

    return (
        <>
        {isGoal ? <MadeGoal />: <MissedGoal />}
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={true} />);