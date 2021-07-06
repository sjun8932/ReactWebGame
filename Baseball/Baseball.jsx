const React = require('react');
const {Component} = React;

function getNumbers() {

}

class Baseball extends Component {

    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = () => {

    };

    onChangeInput = () => {

    };

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit = {this.onSubmitForm}>
                    <input maxLength = {4} value = {this.state.value} onChange = {this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {['시은','아이사','수민','세은','재이','윤'].map( (v) => {
                        return (
                            <li>{v}</li>
                        );
                    })}
                </ul>
            </>
        );
    }

}

module.exports = Baseball;