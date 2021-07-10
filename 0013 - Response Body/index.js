const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "application/json");

  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      return response.end(
        JSON.stringify({
          message: "ini adalah homepage!",
        })
      );
    }

    response.statusCode = 400;
    response.statusMessage = "Error Bro";
    return response.end(
      JSON.stringify({
        message: `Halaman tidak dapat diakses dengan ${method} request`,
      })
    );
  } else if (url === "/about") {
    response.statusCode = 200;
    if (method === "GET") {
      return response.end(
        JSON.stringify({
          message: `About me`,
        })
      );
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        return response.end(
          JSON.stringify({
            message: `haii ${name}`,
          })
        );
      });
    } else {
      response.statusCode = 400;
      response.statusMessage = "Error Bro";
      return response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request`,
        })
      );
    }
  } else {
    response.statusCode = 404;
    return response.end(
      JSON.stringify({
        message: `Halaman tidak ditemukan`,
      })
    );
  }
};

const server = http.createServer(requestListener);
const port = 5000;
const host = "localhost";
server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
// ! type this on CMD : curl -X GET  http://localhost:5000
