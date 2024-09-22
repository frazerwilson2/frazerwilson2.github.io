export default `
  :root {
      --primary: #db5296;
  }
  body {
    background: #fafafa;
    font-family: 'georgia', serif;
    color: #333;
    font-size: 18px;
  }
  .container {
    margin: 0 auto;
    max-width: 700px;
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
    text-decoration: none;
  }
  .post a h2:hover {
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
