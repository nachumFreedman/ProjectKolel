import React, { Component } from 'react';

import BookTray from '../pure/BookTray';
import ChapterTray from '../pure/ChapterTray';

import series from './ShulchanAruch/shulchanAruchSeries';

class ShulchanAruch extends Component {
  state = {
  }

  
  render() {
    return (
      <div className="ShulchanAruchPage">
        <BookTray series={series}/>
        <ChapterTray/>
      </div>
    );
  }
}
export default ShulchanAruch;
