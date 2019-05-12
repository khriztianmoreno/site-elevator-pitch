[![Netlify Status](https://api.netlify.com/api/v1/badges/a5faf450-7640-4748-bb13-b4485b787b29/deploy-status)](https://app.netlify.com/sites/gifted-thompson-49a0c5/deploys)

# 👨🏼‍💻 Khriztianmoreno Elevator Pitch Web Site 

A Gatsby theme presenting a person

<p align="center">
  <img alt="GraphQL Data in React with Apollo Client" src="./.readme-static/pitch.gif" width="80%" />
</p>


## Prerequisites

If you do not have Gatsby Cli installed yet, do it first.

```text
npm install --global gatsby-cli
```

More information on [GatsbyJS.org](https://www.gatsbyjs.org/tutorial/part-one)

## 🚀 Quick start

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-default-starter/
    npm start
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## Add content

#### Folders structure

Find folders `images` and `screens` inside the `content/elevator-pitch` folder.

```
root
  ├── content
  │   └── elevator-pitch
  │       ├── images
  │       │   └── ...
  │       └── screens
  │           └── ...
```

Put a `jpg` file named `avatar.jpg` into the `images` folder. Then add two or more `markdown` files to the `screens` folder.

```
root
  ├── content
  │   └── elevator-pitch
  │       ├── images
  │       │   └── avatar.jpg
  │       └── screens
  │           ├── 1___first-screen.md
  │           └── 2___second-screen.md
```

#### Files names

You can not use a different name for avatar than `avatar.jpg`.

The names of `markdown` files have to obey a pattern `X___slug.md`. Where `X` is a number indicating position of the screen. The number must be follewed by the `___` separator ( 3 x undescore ). The last part of the name, a `slug` is optional. Knowing that, you can name a file like this `1___.md` or `1__first-scrren.md`. Take a look at the [demo content files](https://github.com/greglobinski/gatsby-themes/tree/master/packages/gatsby-theme-elevator-pitch/content/screens) of the theme in the repository.

#### Markdown `screen` files

This is example of a `markdown` file with content for one screen. Two sections: title (`#`) and a paragraph text below.

```
# This is the screen's title

And the screen's body copy.
```

You can add as many `screen` files as you want. But remember it should be an elevator pitch so less is better. ;)

#### Meta data and social links

Update your `gatsby-config.js`

```
module.exports = {
  siteMetadata: {
    title: `Gatsby.js 'Elevator Pitch' theme`,
    url: `https://khriztianmoreno.dev`,
    image: 'preview.png',
    language: 'en',
    description: 'FullStack Javascript Developer and Community builder | Producer @commitfm | Co-Organize of @MedellinJS @avanet.',
    socialLinks: {
      github: 'https://github.com/khriztianmoreno',
      twitter: 'https://twitter.com/khriztianmoreno',
      mailto: 'mailto:khriztianmoreno@gmail.com',
    },
  },
  module.exports = {
  __experimentalThemes: ['gatsby-theme-elevator-pitch']
};
```

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/khriztianmoreno/site-elevator-pitch)
