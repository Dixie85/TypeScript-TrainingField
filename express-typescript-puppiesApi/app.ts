import express from "express";
import { Request, Response, Application } from "express";
import bodyParser from "body-parser";
import { puppiesDb } from "./db/db";
import { IPuppie } from "types/types";

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/test", (_req: Request, res: Response) => {
  return res.status(200).json({ test: "is working as it should" });
});

app.get("/api/puppies", (_req: Request, res: Response) => {
  return res.status(200).json(puppiesDb);
});

app.get("/api/puppies/:id", (_req: Request, res: Response) => {
  const id: number = Number(_req.params.id);
  const getPuppyById = puppiesDb.find((puppy) => puppy.id === id);
  return res.status(200).json(getPuppyById);
});

app.post("/api/puppies", (_req: Request, res: Response) => {
  const puppyData: IPuppie = _req.body;
  const newPuppyEntry: IPuppie = {
    id: puppiesDb.length + 1,
    ...puppyData,
  };
  //@ts-ignore
  const dbUpdated = [...puppiesDb, newPuppyEntry];
  return res.status(201).json(newPuppyEntry);
});

app.put("/api/puppies/:id", (_req: Request, res: Response) => {
  const id: number = Number(_req.params.id);
  const puppyData: IPuppie = _req.body;
  const updatedPuppyEntry: IPuppie = {
    id: id,
    ...puppyData,
  };
  const filterPuppies = puppiesDb.filter((puppy) => puppy.id !== id);
  const updatedPuppiesDb = [...filterPuppies, updatedPuppyEntry];
  return res.status(200).json(updatedPuppiesDb);
});

app.delete("/api/puppies/:id", (_req: Request, res: Response) => {
  const id: number = Number(_req.params.id);
  const updatedPuppiesDb = puppiesDb.filter((puppy) => puppy.id !== id);
  return res.status(200).json(updatedPuppiesDb);
});

export default app;
