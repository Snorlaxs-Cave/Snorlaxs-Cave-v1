import express from "express";
import http from "node:http";
import createBareServer from "@tomphttp/bare-server-node";
import path from "node:path";
import * as dotenv from "dotenv";
dotenv.config();

const __dirname = process.cwd();
const server = http.createServer();
const app = express(server);
const bareServer = createBareServer("/bare/");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});
app.get("/proxy", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "Proxy.html"));
});
app.get("/games", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "Games.html"));
});
app.get("/apps", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "Apps.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "About.html"));
});


// Currently do not have a 404 page
/* app.get("/*", (req, res) => {
  res.redirect("/404");
});
*/

server.on("request", (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.on("listening", () => {
  console.log(`Snorlax's Cave listening on port ${process.env.PORT}`);
});

server.listen({
  port: process.env.PORT,
});