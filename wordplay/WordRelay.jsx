const React = require('react');
const { Component } = React;

class WordRelay extends Component {

    state = {
        text: "웹팩 설정을 한번 해보았다."
    };

    render() {
        return <h1>{this.state.text}</h1>
    }
}

module.exports = WordRelay;