import React, {Component} from 'react';
import series from '../p/Mishna/Series';
import './ChapterTray.css';

const perekim = series[1].books[10].perekim;

class ChapterTray extends Component{ 
  render(){
    return (
      <div className='chaptertray-containing'>
        <ul className='chaptertray-ul'>
          {
            perekim.map((perek, pi) => (
              <li key={pi} className='chaptertray-title'>
                Perek{' '+ (pi+1)}
                {
                  perek.map((vi) => (
                    <div key={vi} className='chaptertray-pereknumber'>
                      <a href="#/mishna" className='chaptertray-pereknumber-link'>
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
