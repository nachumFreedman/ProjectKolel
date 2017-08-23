import React, {Component} from 'react';
import series from '../p/Mishna/Series';
import './ChapterTray.css';

const perekim = series[1].books[10].perekim;

class ChapterTray extends Component{ 
  render(){
    return (
      <div>
        <ul>
          {
            perekim.map((perek, pi) => (
              <li key={pi}>
                Perek{pi+1}
                {
                  perek.map((vi) => (
                    <div key={vi}>
                      <a href="#/blah">
                        {vi}
                      </a>
                    </div>
                  ) ) 
                }
              </li>         
            ) )
          }
        </ul>
      </div>
    )
  }
}
export default ChapterTray;
