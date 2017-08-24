import React, { Component } from 'react';

import GridTray from '../../pure/GridTray';

import tiles from './talmudContentTiles';

class TalmudBook extends Component {
  render(){
    const linkedTiles = tiles.map(t => ({
      ...t,
      link: window.location.hash.slice(1) + t.link,
    }) );
    
    return (
      <div>
        <GridTray width={this.context.width}
                  tiles={linkedTiles}>
          Pick Resource
        </GridTray>

      </div>
    );
  }
}

export default TalmudBook;
