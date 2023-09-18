const jsonServer = require("json-server");
const server = jsonServer.create();
const path = process.env.DB_PATH || "db.json";
const router = jsonServer.router(path);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

