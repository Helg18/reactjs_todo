import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" href="#"><i className="fa fa-sticky-note"></i> Tareas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fa fa-plus"></i> Nueva</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
