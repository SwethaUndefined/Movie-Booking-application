import React, { Component } from "react";

import Header from "../../common/header/Header";
import "./Home.css";
import moviesData from "../../common/moviesData";
import {
  Card,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,Button
} from "@mui/material";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      age: "",
      movies:moviesData
    };
  }

  render() {
    let handleChange = (event) => {
      this.state.age = event.target.value;
    };
    return (
      <div>
        <Header />
        <div className="headerDiv">
          <p>Upcoming Movies</p>
        </div>
        <ImageList cols={7} className="root">
          {this.state.movies.map((movies) => (
            <ImageListItem key={movies.img}>
              <img
                src={movies.poster_url}
                alt={movies.title}
                className="movieHeader"
              />
              <ImageListItemBar
                title={movies.title}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <div className="flexContainer">
          <div className="left">
            <ImageList cols={4}>
              {this.state.movies.map((movies) => (
                <ImageListItem key={movies.img}>
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
          <Card className="right">
            <form>
              <h3 className="findMovie"> FIND MOVIES BY</h3>
              <FormControl variant="standard" sx={{ mb: 3 }} fullWidth>
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Movie Name"
                  variant="standard"
                />
              </FormControl>
              <FormControl fullWidth variant="standard" sx={{ mb: 3 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Genres
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={this.state.age}
                  onChange={handleChange}
                  label="Genres"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="standard" sx={{ mb: 3 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Artists
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={this.state.age}
                  onChange={handleChange}
                  label="Artists"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ mb: 3 }} fullWidth>
                <TextField
                  type="date"
                  fullWidth
                  id="standard-basic"
                  label="Release Date Start"
                  variant="standard"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ mb: 3 }} fullWidth>
                <TextField
                  type="date"
                  fullWidth
                  id="standard-basic"
                  label="Release Date End"
                  variant="standard"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ mb: 3 }} fullWidth>
              <Button variant="contained" fullWidth>Apply</Button>
              </FormControl>
            </form>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
