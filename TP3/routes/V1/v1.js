const express = require("express");
const joi = require("joi");
const route = express.Router();
const Countries = require("../../Countries.json");
const validatee = require("../routes/middlewares/validate");

route.get("/", (req, res) => {
  res.json(Countries);
});
route.get("/:id", (req, res) => {
  const index = Countries.find((e) => e.id === req.params.id);
  index ? res.status(200).json(index) : res.status(404).send("NOT FOUND");
});
route.post("/", validatee, (req, res) => {
  const id = Countries[Countries.length - 1].id + 1;
  Countries.push({ id, ...req.body });
  // throw Error("somthing faile"); //throw error to test error handling
  res.status(200).send("added succefuly");
});
route.put("/:id", validatee, (req, res) => {
  const index = Countries.find((e) => e.id === req.params.id);
  Countries[index] = req.body;
  res.status(200).send("Updated  succefuly");
});
route.delete("/:id", (req, res) => {
  const newcountrie = Countries.filter((e) => e.id != req.params.id);
  Countries = newcountrie;
  res.status(200).send("deleted   succefuly");
});

module.exports = route;
