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
                    {[
                        {이름: '시은', 특징: '큐티'},
                        {이름: '아이사', 특징: '여시'},
                        {이름: '수민', 특징: '똘똘'},
                        {이름: '세은', 특징: '청순'},
                        {이름: '재이', 특징: '착함'},
                        {이름: '윤',특징: '키가 큼'}
                    ].map( (v) => {
                        return (
                            <li><b>{v.이름}</b> - {v.특징}</li>
                        );
                    })}
                </ul>
            </>
        );
    }

}

module.exports = Baseball;