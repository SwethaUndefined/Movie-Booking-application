import React, { Component } from 'react'
import {
    ImageList,
    ImageListItem,
    ImageListItemBar
  } from "@mui/material";

class ReleasedMovies extends Component {
  render() {
    const{Movies}=this.props;
    return (
        <div className="left">
            <ImageList cols={4}>
              {Movies.map((movies) => (
                <ImageListItem key={movies.id}>
                  <img
                    className="movieImage"
                    src={movies.poster_url}
                    alt={movies.title}
                  />
                  <ImageListItemBar
                    title={movies.title}
                    subtitle={movies.release_date.toString()}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
    )
  }
}

export default ReleasedMovies