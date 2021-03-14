import React from 'react';
import starImage from '../images/star.png';
import emptyStarImage from '../images/empty-star.png';

// The Star function displays a single clickable Star
function Star(props) {
    // Display a filled star or empty star based on the Star's value and the current rating
    let image = props.value > props.rating? emptyStarImage: starImage;
    let altText = props.value >= props.rating? "empty star" : "star";

    // Only display the Star if it is filled or it is editable
    if (props.editable === true || props.value <= props.rating) {
        return (<img src={image} alt={altText} onClick={() => props.handleClick(props.value)}/>);
    } else {
        return null;
    }
}

// Stars is a one to five-star rating component that allows users to rate something 
export default class Stars extends React.Component {
    constructor(props) {
        super(props);
    }

    // The handleClick function informs the caller when a Star component is clicked.
    handleClick(i) {
        if (this.props.editable) {
            this.props.onChange(i);
        }
    }

    // renderStar renders a single Star component.
    renderStar(i) {
        return (
            <Star 
                editable={this.props.editable}
                value={i}
                rating={this.props.rating}
                handleClick={() => this.handleClick(i)}
            />
        );
    }

    // Displays five clickabble Star components with values from 1 to 5.
    render() {
        return (
            <div>
                {this.renderStar(1)}
                {this.renderStar(2)}
                {this.renderStar(3)}
                {this.renderStar(4)}
                {this.renderStar(5)}
            </div>
        );
    }
}