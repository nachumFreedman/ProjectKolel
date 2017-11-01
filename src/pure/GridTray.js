import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import './GridTray.css'

export default ({ width, children, tiles, subheaderStyle={} }) => {

  const gridCols = Math.min(
    width < 600 ? 2 :
    width < 900 ?
    3 : 5, tiles.length);

  const subStyles = {
    padding: 0,
    backgroundColor: '#92c1ff',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    textAlign:'center',
    lineHeight: '1.5em',
    ...subheaderStyle,
    boxShadow: '1px 0 5px grey'
  };

  
  return (
    <div style={{
      backgroundColor: 'white',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    }}>

      <GridList
        cellHeight={'auto'}
        style={{ overflowY: 'auto' }}
        cols={gridCols}>

        <Subheader style={subStyles}>
          {children} 
        </Subheader>

        {
          tiles.map(({ title, img, hoverImg, Icon, link }, i) => (
            <a href={'#' + link} key={i}>
              <GridTile
                titleStyle={{ marginLeft: -16 }}
                style={{
                  borderRadius: '1px',
                  boxShadow: '1px 1px 5px grey',
                  height: '18vh',
                  maxHeight: '150px',
                }}>
                <div
                  style={{display:'flex',
                          justifyContent: 'center'}}
                  className='gridTrayImgContainer'
                >
                  <img src={img} alt=''/>
                  <img src={hoverImg} alt=''/>
                </div>
              </GridTile>
            </a>
          ))
        }
      </GridList>
    </div>
    
  );
};
