import React, { Component } from "react";
import {
  Card,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Checkbox,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        genre:[],
        artist:[],
        releaseDateStart:'',
        releaseDateEnd:''
    };
  }
    
  render() {
    const { Artist, Genre,Filter} = this.props;
    let theme = createTheme();
    let form = {
      color: theme.palette.primary.light,
      margin: theme.spacing.unit,
      minWidth: 240,
      maxWidth: 240,
    };

    let handleChange = (event) => {
        const tempState=this.state;
        tempState[event.target.name]=event.target.value;
        this.setState(tempState);
    };

    const formSubmit=(e)=>{
      e.preventDefault();
      Filter(this.state);
    }

    return (
      <Card className="right">
        <form onSubmit={formSubmit} method="post">
          <h3 className="findMovie" style={{ ...form }}>
            {" "}
            FIND MOVIES BY
          </h3>
          <FormControl variant="standard" sx={{ mb: 3 }} fullWidth>
            <TextField
              fullWidth
              id="standard-basic"
              label="Movie Name"
              variant="standard"
              name="name"
              value={this.state.name}
              onChange={handleChange}
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
            //   onChange={handleChange}
              label="Genres"
              name="genre"
            >
              <MenuItem value="" key="None">
                <em>None</em>
              </MenuItem>
              {Genre.map((genre) => {
                return (
                  <MenuItem
                    control={<Checkbox />}
                    value={genre.name}
                    key={genre.id}
                  >
                    <Checkbox inputProps={{ "aria-label": "controlled" }} />
                    {genre.name}
                  </MenuItem>
                );
              })}
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
            //   onChange={handleChange}
              label="Artists"
              name="artist"
            >
              <MenuItem value="" key="None">
                <em>None</em>
              </MenuItem>
              {Artist.map((artist) => {
                return (
                  <MenuItem
                    control={<Checkbox />}
                    value={artist.name}
                    key={artist.id}
                  >
                    <Checkbox inputProps={{ "aria-label": "controlled" }} />
                    {artist.first_name + " " + artist.last_name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ mb: 3 }} fullWidth>
            <TextField
              type="date"
              fullWidth
              id="standard-basic"
              label="Release Date Start"
              variant="standard"
              name="releaseDateStart"
              value={this.state.releaseDateStart}
              onChange={handleChange}
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
              name="releaseDateEnd"
              value={this.state.releaseDateEnd}
              onChange={handleChange}
              InputLabelProps={{
              shrink: true,
              }}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ mb: 3 }} fullWidth>
            <Button variant="contained" fullWidth type="submit">
              Apply
            </Button>
          </FormControl>
        </form>
      </Card>
    );
  }
}

export default FilterForm;
