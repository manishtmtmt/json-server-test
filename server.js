const jsonServer = require("json-server");
const fs = require("fs");
const path = require("path"); // Don't forget to require path module
const server = jsonServer.create();

// Use __dirname to locate db.json correctly
const db = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json")));
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
