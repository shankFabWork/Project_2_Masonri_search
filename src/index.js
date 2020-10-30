import react from 'react';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Export_App from './ImageSearch/Export_App.js'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
            <Export_App />    
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));
