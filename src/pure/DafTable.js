import React from 'react';

import './DafTable.css';

import hebrewNumbers from '../hebrew-numbers';

const daf = {
  he: 'דף ',
  en: 'Daf ',
};

export default ({ lang='he', hrefPrefix='#' }) => (
  <table className="dafTable">
    <tbody>
      {
        Array(15).fill(1).map((o, i)=> (
          <tr key={i}>
            {
              Array(7).fill(1).map((p, j)=> ( (i*7 + j + 1 > 103)? null : (
                <td key={j}>
                  <a href={hrefPrefix+'/'+ (i*7 + j + 1)}>
                    {daf[lang]}
                    {
                      lang === 'en'? (
                        i*7 + j + 1
                      ) : (
                        hebrewNumbers[i*7 + j ]
                      )
                    }
                  </a>
                </td>
              ) ) )
            }
          </tr>
        ) )
      }
    </tbody>
  </table>
);
