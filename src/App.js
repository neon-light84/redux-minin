import './App.css';
import {Component} from "react";

import {connect} from "react-redux";
import Couner from "./Counter";
import {add, addNumber, sub} from "./redux/actions/actions";

class App extends Component {

    render() {
        // console.log('APP', this.props);
        return (
            <div>
                <h1>Счетчик <strong>{this.props.counter}</strong></h1>
                <hr/>
                <div>
                    <button onClick={this.props.onAdd}>Добавить 1</button>
                    <button onClick={this.props.onSub}>Вычесть 1</button>
                </div>
                <div>
                    <button onClick={() => this.props.onAddNumber(15)}>Добавить 15</button>
                    <button onClick={() => this.props.onAddNumber(-17)}>Вычесть 17</button>
                </div>
                <Couner/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log('State', state);
    return {
        counter: state.counter1.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNumber: number => dispatch(addNumber(number)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
