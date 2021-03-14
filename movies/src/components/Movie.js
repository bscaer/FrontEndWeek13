import React from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

// Movie is a component that represents a movie with a title, image, synopsis, 
// a list of reviews and ratings, and a form to enter a rating and a review.
export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {reviewId: 1, reviews: props.reviews};
        this.addReview = this.addReview.bind(this);
    }

    // The addReview function adds a new review to the Movie's list of reviews
    addReview(review) {
        this.setState(state => {
            const reviews = state.reviews.slice();
            // The review id is incremented after adding the new review to the list of reviews.
            return { reviews: [...reviews, review], reviewId: state.reviewId+1};  
        });
    }

    // Render the Movie title, image, synopsis, list of reviews and ratings, and the form to enter a rating and a review.
    render() {
        return (
            <div className="card">
                <h4 className="card-header">{this.props.title}</h4>
                <img className="card-img-bottom" src={this.props.image} alt={this.props.title}/>
                <div className="card-body">
                    <p className="card-text">{this.props.synopsis}</p>
                    <ReviewList reviews={this.state.reviews}/>
                    <ReviewForm reviewId={this.state.reviewId} addReview={this.addReview}/>
                </div>
            </div>
        );
    }   
}