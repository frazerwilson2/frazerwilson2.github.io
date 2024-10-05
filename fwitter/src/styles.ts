export default `
  :root {
      --primary: #B89E06;
      --body: #252525;
  }
  body {
    background: #fff;
    font-family: 'arial', sans-serif;
    color: #333;
    font-size: 1.375;
  }

  .dmserif {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: normal;
  }
  .primary {
    color: var(--primary);
  }

  header {
    padding: 30px 0;
    border-bottom: 1px var(--primary) solid;
    position: relative;
  }
  header::after {
    content: '';
    border-bottom: 1px var(--primary) solid;
    position: absolute;
    width: 360px;
    bottom: -2px;
    left: calc(50% - 180px);
  }
  .header-title {
    color: var(--body);
    font-size: 38px;
    text-align: center;
  }
  @media(min-width: 550px){
    .header-title {
      font-size: 60px;
    }
    header svg {
      top: -30px;
      left: -10px;
    }
  }
  header svg {
    position: relative;
    top: -20px;
    left: -5px;
  }
  .title-highlight {
    color: var(--primary);
    font-style: italic;
    margin-right: 10px;
  }


  .container {
    margin: 0 auto;
    max-width: 900px;
    line-height: 1.6;
    display: grid;
  }
  img {
    max-width: 100%;
    margin: 0 auto;
  }
  .posts {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1em;
  }
  .post {
    padding: 0.5rem 0;
  }
  .post h2, .prev-more h2 {
    margin: 15px 0;
  }
  h1, h2, h3, h4, h5, h6 {
    color: var(--body);
    font-family: "DM Serif Display", serif;
    font-weight: 400;
  }
  h1 {
    margin: 0;
  }
  h2 {
    font-size: 1.75rem;
  }
  p {
    font-size: 1.125rem;
  }
  @media(min-width: 550px){
    p {
      font-size: 1.375rem;
    }
  }
  .statement {
    color: #4D4D4D;
  }
  .published {
    color: #808080;
    font-size: 0.8rem;
    font-family: arial, sans-serif;
    position: relative;
    top: -15px;
  }
  .more {
    text-align: right;
  }
  .post a {
    display: flex;
    text-decoration: none;
    position: relative;
  }
  .post a h2 {
    text-decoration: none;
  }
  .post a h2:hover, .prev-more a h2:hover {
    text-decoration: underline;
  }
  a {
    position: relative;
    text-decoration: none;
  }
  .post a::before, .prev-more a::before {
    content: '';
    border: 10px transparent solid;
    border-top: 10px #F8D821 solid;
    border-left: 10px #F8D821 solid;
    width: 0;
    height: 0;
    position: absolute;
    top: 20px;
    z-index: -1;
  }
  .prev-more {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  .prev-more.back {
    justify-content: flex-start;
  }
  .post-content {
    display: grid;
  }
  @media(min-width: 550px){
    .post-content {
      grid-template-columns: 2fr 1fr;
      gap: 60px;
    }
  }
`;
