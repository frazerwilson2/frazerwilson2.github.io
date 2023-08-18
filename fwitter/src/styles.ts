export default `
  :root {
      --primary: #9b1357;
  }
  body {
    background: #f7f7f7;
    font-family: 'georgia', serif;
    color: #333;
    font-size: 18px;
  }
  .container {
    margin: 0 auto;
    max-width: 80vw;
    line-height: 1.6;
  }
  img {
    max-width: 100%;
  }
  .posts {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1em;
  }
  .post {
    border-top: 1px solid #ccc;
    padding: 0.5rem 0;
  }
  .post:first-child {
    border-top: none;
  }
  h1, h2, h3, h4, h5, h6 {
    color: var(--primary);
    font-weight: normal;
  }
  h2 {
    font-size: 1.2rem;
  }
  .published {
    color: #999;
    font-size: 0.8rem;
  }
  .more {
    text-align: right;
  }
  .post a {
    display: flex;
    text-decoration: none;
  }
  .post a h2 {
    text-decoration: underline;
  }
  .post a::after {
    content: '>';
    align-self: end;
    flex: 1;
    text-align: right;
    font-size: 2rem;
  }
`;
