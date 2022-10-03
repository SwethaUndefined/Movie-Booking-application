import React, { Component } from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

class UpcomingMovies extends Component {
  render() {
    const{Movies}=this.props;
    return (
      <ImageList cols={7} className="root">
        {Movies.map((movies) => (
          <ImageListItem key={movies.id}>
            <img
              src={movies.poster_url}
              alt={movies.title}
              className="movieHeader"
            />
            <ImageListItemBar title={movies.title} />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
}

export default UpcomingMovies;
