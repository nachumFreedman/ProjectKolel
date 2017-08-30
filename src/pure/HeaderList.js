import React from 'react';

export default ({ head, items })=> (
  <div style={{ display: 'flex', border: '2px solid black', flexDirection: 'column', height: '100%' }}>
    <div style={{ backgroundColor: '#003399', color: 'white' }}>
      { head }
    </div>
    <div style={{ backgroundColor: '#efefff' }}>
      <ul style={{ padding: 0, fontSize: 'x-small' }}>
        {
          items.map(({ text, link }, i)=> (
            <li key={i}>
              <a href={link}>
                { text }
              </a>
            </li>
          ) )
        }
      </ul>
    </div>
  </div>
);
