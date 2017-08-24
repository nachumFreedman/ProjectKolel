import React, { Component } from 'react';

import BookTray from '../pure/BookTray';

import talmudSeries from './Talmud/talmudSeries';

class Talmud extends Component {
  render() {
    const onClick = (s, b)=> window.location.hash += '/'+b;
    
    return (
      <div className="TalmudPage">
        <BookTray series={talmudSeries} onClick={onClick}/>
      </div>
    );
  }
}

export default Talmud;
