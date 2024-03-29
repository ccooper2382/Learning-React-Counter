import React, {Component} from "react";
import './App.css';
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component{
    state = {
        counters: [
            { id: 1, value: 7},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0},
        ]
    }

    constructor() {
        super();
        console.log('app - constructor')
    }

    componentDidMount() {
        console.log('app-mounted')
    }


    handleReset = () => {
        const counters = this.state.counters.map(c => {c.value=0; return c;});
        this.setState({counters});
    }

    handleDelete= (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({counters})
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters})

    }

    handleDecriment = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters})

    }
  render() {
        console.log('app-rendered')
  return (
      <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecriment={this.handleDecriment}
            onDelete={this.handleDelete}
        />

      </main>
      </React.Fragment>
  );

}
}
export default App;
