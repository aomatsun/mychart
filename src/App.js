// import Hello from './Hello';
// import './style.css';
import React, { Component } from "react";

import classNames from 'classnames';
import PropTypes from 'prop-types';
// import { withStyles, createStyleSheet } from 'material-ui/styles';

import Chart from './chartJs/linechart'
// import keycode from 'keycode';
// import Table, {
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   TableSortLabel,
// } from 'material-ui/Table';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
// import Paper from 'material-ui/Paper';
// // import Checkbox from 'material-ui/Checkbox';
// import IconButton from 'material-ui/IconButton';
// // import DeleteIcon from 'material-ui-icons/Delete';
// // import FilterListIcon from 'material-ui-icons/FilterList';
// import TextField from 'material-ui/TextField';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Chart />
      </div>
    );
  }
}


export default App;