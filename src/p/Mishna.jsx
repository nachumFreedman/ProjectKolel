import React, {Component} from 'react';
import './Mishna.css'
import BookTray from '../pure/BookTray';
import ChapterTray from '../pure/ChapterTray';

class Mishna extends Component {
  render() {
    return (
      <div className="MishnaPage">
         <BookTray />
        <ChapterTray/>
      </div>
    );
  }
}
export default Mishna;
