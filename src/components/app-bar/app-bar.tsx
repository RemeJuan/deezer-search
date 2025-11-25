import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Equalizer } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { appBarStyles } from './app-bar.styles';
import { IAppBar } from './app-bar.interface';

export default function AppBarComponent(props: IAppBar) {
  const { handleSubmit } = props;
  const { classes } = appBarStyles();
  const params = useParams<{ query?: string }>();
  
  const q = params.query ?? '';
  const [query, setQuery] = useState<string>(q);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }
  
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return handleSubmit(query);
  }
  
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
            <Equalizer />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <form onSubmit={onSubmit}>
                  <InputBase
                    placeholder="Search…"
                    value={query}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleChange}
                  />
              </form>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
