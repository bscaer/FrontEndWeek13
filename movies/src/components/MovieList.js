import React from 'react';
import Movie from './Movie';
import nineteeneightyfour from '../images/1984.jpg';
import bravenewworld from '../images/brave new world.jpg';
import atlasshruggedtrilogy from '../images/atlas shrugged.jpg';
import bladerunner from '../images/bladerunner.jpg';
import moviesImage from '../images/movies.jpg';

// A mock list of movies
const mockMovieData = [
    {
        id: 1,
        title: "1984",
        image: nineteeneightyfour,
        synopsis: "In a totalitarian future society, a man, whose daily work is re-writing history, tries to rebel by falling in love.",
        rating: 1,
        reviews: []
    },
    {
        id: 2,
        title: "Brave New World",
        synopsis: "A man who grew up in a primitive society educating himself by reading Shakespeare is allowed to join the futuristic society where his parents are from. However, he cannot adapt to their repressive ways.",
        image: bravenewworld,
        rating: 1,
        reviews: []
    },
    {
        id: 3,
        title: "Atlas Shrugged",
        synopsis: "Railroad executive Dagny Taggart and steel mogul Henry Rearden form an alliance to fight the increasingly authoritarian government of the United States.",
        image: atlasshruggedtrilogy,
        rating: 1,
        reviews: []
    },
    {
        id: 4,
        title: "Blade Runner",
        synopsis: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
        image: bladerunner,
        rating: 1,
        reviews: []
    }
];

// MovieList is a container for all the Movie components.
export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: mockMovieData
        }
    }

    // Display the list of movies
    render() {
        // Map the list of movies to a list of Movie components.
        const movieList = this.state.movies.map(movie => 
            (<Movie {...movie} key={movie.id} />)
        );

        // Display the list of Movie components.
        return (
            <div className="card-deck">
                <div className="card">
                    <h1 className="card-header">Movies</h1>
                    <img className="ard-img-bottom" src={moviesImage} alt="Movies"/>
                </div>
                <div className="card-deck">
                    {movieList}
                </div>
            </div>
        );
    }
}