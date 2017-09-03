import React, {Component} from 'react';
import './Mishna.css'
import BookTray from '../pure/BookTray';
import ChapterTray from '../pure/ChapterTray';

import series from './Mishna/mishnaSeries';

class Mishna extends Component {
  render() {
    return (
      <div className="MishnaPage">
         <BookTray series={series}/>
        <ChapterTray/>
      </div>
    );
  }
}
export default Mishna;
