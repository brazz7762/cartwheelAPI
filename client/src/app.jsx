import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <div>Pee Pee Poo Poo Oh No No</div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
