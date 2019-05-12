import React from 'react';
import 'typeface-open-sans';
import { Global, css } from '@emotion/core';

const COLORS = [
  '#A60D61',
  '#022340',
  '#06ADBF',
  '#F2C36B',
  '#F26D3D',
]

const StyleVars = () => (
  <Global
    styles={css`
      :root {
        --accentColor: #c00;
        --backgroundColor: ${COLORS[Math.floor(Math.random() * COLORS.length)]};
        --lastBackgroundColor: #333;
        --transitionBackgroundColor: #ddd;
        --textColor: #FFFFFF;
        --brightTextColor: #aaa;
        --fontFamily: 'Open Sans', Arial, sans-serif;
        --linkColor: #c00;
        --hoverLinkColor: #a00;
        --brightLinkColor: #ddd;
      }
    `}
  />
);

export default StyleVars;
