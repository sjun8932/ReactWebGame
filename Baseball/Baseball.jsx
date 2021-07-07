const React = require('react');
const {Component} = React;
const Stayc = require('./Stayc');

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

    stayc = [
        {name: '시은', characteristic: '큐티'},
        {name: '아이사', characteristic: '여시'},
        {name: '수민', characteristic: '똘똘'},
        {name: '세은', characteristic: '청순'},
        {name: '재이', characteristic: '착함'},
        {name: '윤',characteristic: '키가 큼'},
        {name: '아이사', characteristic: '넘이쁨'}
    ]

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit = {this.onSubmitForm}>
                    <input maxLength = {4} value = {this.state.value} onChange = {this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.stayc.map( (v,i) => {
                        return (
                            <Stayc key={v.name + v.characteristic} value={v} index={i}/>
                        );
                    })}
                </ul>
            </>
        );
    }

}

module.exports = Baseball;