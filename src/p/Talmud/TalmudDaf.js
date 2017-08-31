import React, { Component } from 'react';

import sampleDaf from '../../network/GetHtmlDaf';

class TalmudDaf extends Component {
  render(){
    return (
      <div dangerouslySetInnerHTML={sampleDaf}/>
    );
  }
}

export default TalmudDaf;
