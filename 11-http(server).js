const http = require(`http`);

const server = http.createServer((req, res) => {
  //req = request of client; res = response what we sending back
  if (req.url === `/`) {
    res.end(`Welcome To Paradise`);
  }
  if (req.url === `/about`) {
    res.end("Here is Heaven");
  }
  res.end(`<h1>It's too late...</h1>
  <p>We can't find you in the dark</p>
  <a href ='/'>Return</a>
  `);
});

server.listen(5000);
