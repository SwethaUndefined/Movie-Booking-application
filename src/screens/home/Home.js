import React, { Component } from "react";

import Header from "../../common/header/Header";
import "./Home.css";
import moviesData from "../../common/moviesData";
import Genres from "../../common/genre";
import artists from "../../common/artist";
import FilterForm from "../../common/FilterForm/FilterForm";
import ReleasedMovies from "../../common/ReleasedMovies/ReleasedMovies";
import UpcomingMovies from "../../common/UpcomingMovies/UpcomingMovies";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies:moviesData,
      genre:Genres,
      artist: artists,
      upcomingMovies:moviesData
    };
  }
  
  render() {
    const filter=(data)=>{
      const{name,genre,artist,releaseDateStart,releaseDateEnd}=data;
    let filterValue = this.state.movies.filter((movie)=>{
        return movie.title.toLowerCase().includes(name.toLowerCase()) || movie.release_date===releaseDateStart
        ||movie.release_date===releaseDateEnd;
      })
      this.setState({movies:[...filterValue]})
    }
     
    return (
      <div>
        <Header />
        <div className="headerDiv">
          <p>Upcoming Movies</p>
        </div>
        <UpcomingMovies Movies={this.state.upcomingMovies} />
        <div className="flexContainer">
          <ReleasedMovies Movies={this.state.movies}/>
          <FilterForm Artist={this.state.artist} Genre={this.state.genre} Filter={filter}/>
        </div>
      </div>
    );
  }
}

export default Home;
