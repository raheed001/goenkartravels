import React from 'react'
import { Helmet } from 'react-helmet'
function Head() {
  return (
    <div>

    <Helmet>
    <meta name="google-adsense-account" content="ca-pub-7463236662126159" />
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/* 
    - primary meta tags
  */}
    <title>
      Goenkar Travels - Hey, we’re Goenkar Travels. See our thoughts, stories
      and ideas.
    </title>
    <meta
      name="title"
      content="Goenkar Travels - Hey, we’re Goenkar Travels. See our thoughts, stories and ideas."
    />
    <meta
      name="description"
      content="This is a blog html template made by codewithsadee"
    />
    {/* 
    - favicon
  */}
    <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
    {/* 
    - custom css link
  */}
    <link rel="stylesheet" href="./css/style.css" />
    {/* 
    - google font link
  */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />
    </Helmet>
    </div>
  )
}

export default Head