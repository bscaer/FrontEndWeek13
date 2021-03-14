import React from 'react';
import Stars from './Stars';

// The ReviewForm component represents a text review for a Movie component.
export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);

        this.state = {text: '', rating: 1};
    }

    // This function is called when the Submit button is clicked.
    submitForm() {
        // Add the new review to the caller's list of reviews.
        this.props.addReview({id: this.props.reviewId, text: this.state.text, rating: this.state.rating});

        // Clear the review and rating component values.
        this.setState({text: '', rating: 1});
    }

    // This function is called when the user clicks on a rating star.
    handleRatingChange(i) {
        // Update the rating value.
        this.setState({rating: i});
    }

    // This function is called when the user types in the review text area.
    handleTextChange(event) {
        // Update the review text.
        const target = event.target;
        this.setState({text: target.value});
    }

    // Display the Stars rating component, a text area for entering the review, and a Submit button.
    render() {
        return (
            <div className="form-group">
                <div className="card">
                    <h5 className="card-header">Click to Rate:</h5>
                    <Stars editable={true} rating={this.state.rating} onChange={(i) => this.handleRatingChange(i)}/>
                </div>
                <div className="card">
                    <h5 className="card-header">Leave a Movie Review:</h5>
                    <div className="card">
                        <textarea className="md-textarea form-control" value={this.state.text} onChange={this.handleTextChange} />
                        <button className="btn btn-primary" onClick={this.submitForm}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}