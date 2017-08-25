import React, { Component } from 'react';
import './Insights.css';

import DafTable from '../pure/DafTable';
import hebTabGif from '../imgs/heb-tab.gif';

const pageCopy = {
  en: {
    header: 'OUTLINES OF HALACHOS FROM THE DAF',
    p: `Summary, in outline form, of how a Halachic ruling unfolded from the Daf
based on the rulings of Rishonim, Achronim and modern-day Poskim`,
  },
  he: {
    header: 'נקודות סיכום הלכה מדף',
    p: `סיכום, בצורה מתוארת, כיצד הלכה הלכה מן הדף
על פי פסקי ראשונים, אחרונים ופוסקים מודרניים`,
  }
};

class Insights extends Component {
  state = {
    lang: 'en',
    langs: ['he', 'en'],
  }

  toggleLang = ()=>{
    this.setState({ lang: this.state.langs[
      (
        this.state.langs.indexOf(this.state.lang) +1
      ) % this.state.langs.length
    ] });
  }
  
  render() {
    return (
      <div className="InsightsPage">
        <button style={{ float: 'right' }} onClick={this.toggleLang}>Toggle Language</button>

        <img src={hebTabGif} alt=''/>
        
        <h3>{pageCopy[this.state.lang].header}</h3>
        <p>
          {
            pageCopy[this.state.lang].p.split('\n').map((pp, pi)=> (
              <span key={pi}>
                <span>{pp}</span>
                <br/>
              </span>
            ))
          }
        </p>

        <DafTable lang={this.state.lang} />
      </div>
    );
  }
}
export default Insights;
