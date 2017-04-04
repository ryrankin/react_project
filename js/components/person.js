import React from 'react';

/*
export default function Person(props) {
   return (
        <div className="person">
            <div className="person-name">{props.name}</div>
            <img className="person-img" src={props.imageUrl} />
            <div className="person-job">
                {props.job}
            </div>
        </div>
    );
} 
*/

export default class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlight: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            highlight: !this.state.highlight
        });
    }

    render() {
        const classes = `person ${this.state.highlight ? 'highlight' : ''}`;
        return (
            <div className={classes} onClick={this.onClick}>
                <div className="person-name">{this.props.name}</div>
                <img className="person-img" src={this.props.imageUrl} />
                <div className="person-job">
                    {this.props.job}
                </div>
            </div>
        );
    }
}

Person.defaultProps ={
    imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
};



