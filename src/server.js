import express from "express";
import path from "path";
import bodyParser from "body-parser";
import mongo from "mongoose";

const db = mongo.connect(
  "mongodb+srv://witeoutmysin:<password>@overflow-debt-manager-tzdij.mongodb.net/test?retryWrites=true&w=majority",
  function(err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log.log("Connected to " + db, " + ", response);
    }
  }
);
