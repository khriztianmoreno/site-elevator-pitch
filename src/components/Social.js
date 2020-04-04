import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import GithubIcon from 'react-feather/dist/icons/github';
import TwitterIcon from 'react-feather/dist/icons/twitter';
import MailIcon from 'react-feather/dist/icons/mail';
import CodeIcon from 'react-feather/dist/icons/code';
import YoutubeIcon from 'react-feather/dist/icons/youtube';

import style from '../styles/social';

const Social = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            socialLinks {
              github
              twitter
              mailto
              youtube
            }
          }
        }
      }
    `}
    render={data => {
      const {
        site: {
          siteMetadata: {
            socialLinks: {
              github,
              twitter,
              mailto,
              youtube
            },
          },
        },
      } = data;

      return (
        <div css={style}>
          <a target="_blank" rel="noopener noreferrer" href={github}>
            <GithubIcon />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={twitter}>
            <TwitterIcon />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={github}>
            <CodeIcon />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={youtube}>
            <YoutubeIcon />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={mailto}>
            <MailIcon />
          </a>
        </div>
      );
    }}
  />
);

export default Social;
