import React from 'react';

import hebrewNumbers from '../hebrew-numbers';

const daf = {
  he: 'דף ',
  en: 'Daf ',
};

export default ({ lang }) => (
  <table>
    <tbody>
      {
        Array(15).fill(1).map((o, i)=> (
          <tr key={i}>
            {
              Array(7).fill(1).map((p, j)=> ( (i*7 + j + 1 > 103)? null : (
                <td key={j}>
                  <a href="#/blah">
                    {daf[lang]}
                    {
                      lang === 'en'? (
                        i*7 + j + 1
                      ) : (
                        hebrewNumbers[i*7 + j + 1]
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
