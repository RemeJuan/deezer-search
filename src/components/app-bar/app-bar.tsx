import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {Equalizer} from '@material-ui/icons';
import {useRouteMatch } from 'react-router-dom';
import {appBarStyles} from './app-bar.styles';
import {IAppBar} from './app-bar.interface';

export default (props: IAppBar) => {
  const {handleSubmit} = props;
  const classes = appBarStyles();
  const match = useRouteMatch();
  
  // @ts-ignore
  const q = match.params.query ?? '';
  const [query, setQuery] = useState<string>(q);
  
  useEffect(() => {}, [q]);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }
  
  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
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
