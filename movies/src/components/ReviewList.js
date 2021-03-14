import React from 'react';
import Review from './Review';

// The ReviewList is a container inside of a Movie that houses Review components.
export default class ReviewList extends React.Component {
    render() {

        // Map the list of reviews to a list of Review components.
        const reviewList = this.props.reviews.map(review => 
            (<Review {...review} key={review.id} />)
        );

        // Display the list of Review components.
        return reviewList;
    }
}