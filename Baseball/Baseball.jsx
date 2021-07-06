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
                    {[['시은', '큐티'],['아이사', '여시'],['수민','똘똘'],['세은','청순'],['재이','착함'],['윤','키가 큼']].map( (v) => {
                        return (
                            <li><b>{v[0]}</b> - {v[1]}</li>
                        );
                    })}
                </ul>
            </>
        );
    }

}

module.exports = Baseball;