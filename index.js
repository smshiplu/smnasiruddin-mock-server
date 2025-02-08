// const express = require("express");
// const jsonServer = require("json-server");
// const auth = require("json-server-auth");

import express from "express";
import jsonServer from "json-server";
import auth from "json-server-auth";

const server = express();
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const router = jsonServer.router("./data/db.json");
server.use("/api", router);
server.db = router.db

const middlewares =  jsonServer.defaults()
const rules = auth.rewriter({
  portfolios: 444,
  testimonials: 444
});

server.use(rules)
server.use(auth)
server.use(middlewares)
server.use(router)

server.listen(8000);