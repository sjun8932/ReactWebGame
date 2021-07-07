const React = require('react');
const { Component } = React;

class Stayc extends Component {
    render(){
        return(
            <li>
                {this.props.index} 번 - {this.props.value.name}  
            </li>
        );
    }
}

module.exports = Stayc;