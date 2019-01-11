import React, {Component} from 'react';
import Header from './Components/Header/Header';
import NewNote from './Components/NewNote/NewNote';
import Task from './Components/Task/Task';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTask = this.removeTask.bind(this);

    }

    async removeTask(index) {
        await this.setState({
            todos: this.state.todos.filter((elem, i) => {
                return i !== index;
            })
        });
    }

    async addTodo(todo) {
        await this.setState({todos: [...this.state.todos, todo]});
    }

  render() {
    return (
      <div className="App">
          <Header/>
          <NewNote onAddTodo={this.addTodo}/>
          <Task onShow={this.state.todos} onDelete={this.removeTask}/>
      </div>
    );
  }
}

export default App;
