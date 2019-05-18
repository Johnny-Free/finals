import React, {Component} from 'react';
import './result.css';
import $ from 'jquery';


export default class Result extends Component{
    constructor(props){
        super(props)
        this.state = {}
        this.performSearch()
      }

    
    
    performSearch(searchTerm){
      const url=`https://api.themoviedb.org/3/movie/now_playing?api_key=6dfd883e9d7ba2c9f162c09626872ead&query=`

      $.ajax({
        url: url,
        type:'GET',
        dataType:'JSON',
        success: (searchResults) =>{
          // console.log("good connection", searchResults);
          const results = searchResults.results;
          var movieRows =[];

          results.forEach((movie)=>{
            const poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}` ;
            const movieRow=
              <div className='movies' key={movie.id}>
                <h3>{movie.title}</h3>
                {movie.overview}<br/><br/>
                Rating {movie.vote_average} out of 10 stars <br/> <br/>
                <img alt="Movie Poster" src = {poster_src}></img>
                <hr/>
            </div>
            movieRows.push(movieRow)
          })
          this.setState({rows:movieRows})
        },
        error: (xhr, status, err) =>{
          console.log("it failed", err);
        }
      })
  }
    
      searchChangeHandler = (event) =>{
        this.performSearch(event.target.value)
      }
    
      render() {
        return (
          <div className="results">
          <h2>Now playing at a Theater Near You:</h2>
          {this.state.rows}
          </div>
        );
      }
    }