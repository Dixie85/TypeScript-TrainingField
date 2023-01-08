import express from "express";
import { Application } from "express";
import bodyParser from "body-parser";
import { deletePuppy, errorHandler, getAllPuppise, getPuppyById, postNewPuppy, putUpdatedPuppy  } from "./controllers/controller";

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/puppies", getAllPuppise);

app.get("/api/puppies/:id", getPuppyById);

app.post("/api/puppies", postNewPuppy);

app.put("/api/puppies/:id", putUpdatedPuppy);

app.delete("/api/puppies/:id", deletePuppy);

app.use(errorHandler)

export default app;
