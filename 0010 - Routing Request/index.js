const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;

  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") return response.end("<h1>ini adalah homepage!</h1>");

    return response.end(
      `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`
    );
  } else if (url === "/about") {
    if (method === "GET") return response.end("<h1>about me</h1>");

    if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        return response.end(`<h1>Hai, ${name}!</h1>`);
      });
    } else
      return response.end(
        `<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`
      );
  } else {
    return response.end(`HALAMAN TIDAK DITEMUKAN`);
  }
};

const server = http.createServer(requestListener);
const port = 5000;
const host = "localhost";
server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
