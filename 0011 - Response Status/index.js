const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");

  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      return response.end("<h1>ini adalah homepage!</h1>");
    }

    response.statusCode = 400;
    response.statusMessage = "Error Bro";
    return response.end(
      `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`
    );
  } else if (url === "/about") {
    response.statusCode = 200;
    if (method === "GET") {
      return response.end("<h1>about me</h1>");
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        return response.end(`<h1>Hai, ${name}!</h1>`);
      });
    } else {
      response.statusCode = 400;
      response.statusMessage = "Error Bro";
      return response.end(
        `<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`
      );
    }
  } else {
    response.statusCode = 404;
    return response.end(`HALAMAN TIDAK DITEMUKAN`);
  }
};

const server = http.createServer(requestListener);
const port = 5000;
const host = "localhost";
server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
// ! type this on CMD : curl -X POST "Content-Type: application/json" http://localhost:5000 -i
