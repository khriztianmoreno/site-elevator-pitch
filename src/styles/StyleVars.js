import React from 'react';
import { css, Global } from '@emotion/react';

import 'typeface-open-sans';

const COLORS = [
  '#673ab7',
  '#03a9f4',
  '#3F51B5',
  '#5196A6',
]

const StyleVars = () => (
  <Global
    styles={css`
      :root {
        --accentColor: #c00;
        --backgroundColor: ${COLORS[Math.floor(Math.random() * COLORS.length)]};
        --lastBackgroundColor: #333;
        --transitionBackgroundColor: #ddd;
        --textColor: #F2F0EB;
        --brightTextColor: #aaa;
        --fontFamily: 'Open Sans', Arial, sans-serif;
        --linkColor: #CDDC39;
        --hoverLinkColor: #9E9E9E;
        --brightLinkColor: #ddd;
      }
    `}
  />
);

export default StyleVars;
