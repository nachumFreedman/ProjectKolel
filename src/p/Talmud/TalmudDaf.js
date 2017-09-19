import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';

import sampleDaf from '../../network/GetHtmlDaf';

const domain = 'https://daf-stream.herokuapp.com';
//const domain = 'http://localhost:3000';

class TalmudDaf extends Component {
  state = {
    md: ''
  }
  
  componentDidMount(){
    fetch(domain+'/dafs/raw/kesuvos/insites/ks-dt-'+
          ('000' + window.location.hash.slice(window.location.hash.lastIndexOf('/')+1 )).substr(-3)
         +'.htm')
      .then(pon => pon.text())
      .then(pon => this.setState({ md: pon }) )
  }
  
  render(){
    return (
      <ReactMarkdown source={this.state.md}/>
    );
  }
}
//       <div dangerouslySetInnerHTML={sampleDaf}/>
export default TalmudDaf;
