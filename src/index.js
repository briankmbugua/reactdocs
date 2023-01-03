import React from "react";
import * as ReactDom from "react-dom/client"

//PREVENTING A COMPONENT FROM RENDERING
//in rare cases you want a component to hide itself even though it was rendered by
//other component
//to do this return null instead of its render output


//in the example below the <WarningBanner /> is rendered depending
//on the value of the prop called warn, if the value of the prop is
//false then the component does not render

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
  
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }
  
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
  }

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Page />);