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
app.get("/science", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "Proxy.html"));
});
app.get("/math", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "Games.html"));
});
app.get("/english", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "Apps.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "About.html"));
});
app.get("/settings", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "Settings.html"));
});
app.get("/snorlax", (req, res) => {
  res.sendFile(path.join(__dirname, "static/people-secrets/", "snorlax.html"));
});
app.get("/tlochsta", (req, res) => {
  res.sendFile(path.join(__dirname, "static/people-secrets/", "tlochsta.html"));
});
app.get("/fowntain", (req, res) => {
  res.sendFile(path.join(__dirname, "static/people-secrets/", "fowntain.html"));
});
app.get("/bigfoot", (req, res) => {
  res.sendFile(path.join(__dirname, "static/people-secrets/", "bigfoot.html"));
});
app.get("/burb", (req, res) => {
  res.sendFile(path.join(__dirname, "static/people-secrets/", "burb.html"));
});
app.get("/derpman", (req, res) => {
  res.sendFile(path.join(__dirname, "static/people-secrets/", "derpman.html"));
});
app.get("/cats", (req, res) => {
  res.sendFile(path.join(__dirname, "static/people-secrets/", "cats.html"));
});
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "404.html"));
});

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
  console.log(`Snorlax's Cave listening on port 8080 ${process.env.PORT}`);
});

server.listen({
  port: process.env.PORT,
});
