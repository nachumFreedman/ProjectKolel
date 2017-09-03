import React, {Component} from 'react';
import series from '../p/Mishna/mishnaSeries';
import './ChapterTray.css';

const perekim = series[1].books[10].perekim;

class ChapterTray extends Component{ 
  render(){
    return (
      <div className='chaptertray-containing'>
        <ul className='chaptertray-list'>
          {
            perekim.map((perek, pi) => (
              <li key={pi} className='chaptertray-title'>
                <div>Perek&nbsp;{''+ (pi+1)+ ':'}</div>
                <div className='versewrapper'>
                  {    
                    perek.map((vi) => (
                      <a href="#/mishna" className='chaptertray-pereknumber-link'>                      
                        <div key={vi} className='chaptertray-pereknumber'>

                          {vi}
                        </div>
                      </a>
                    ) ) 
                  }
                </div>
              </li>         
            ) )
          }
        </ul>
      </div>
    )
  }
}
export default ChapterTray;
