import React from 'react';
import Stars from './Stars';

// The Review component represents a text review and a star rating for a Movie component.
export default class Review extends React.Component {
    // Display the review number, the text review, and the star rating.
    render() {
        return (
            <div className="card">
                <h5 className="card-header">Review {this.props.id}</h5>
                <div className="card-body">
                    <h5>{this.props.text}</h5>
                    <Stars rating={this.props.rating}/>
                </div>
            </div>
        );
    }
}