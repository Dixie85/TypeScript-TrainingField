import { NextFunction, Request, Response } from "express";
import { puppiesDb } from "../../db/db";
import { INewPappie, INewUpdatedPappie, IPuppie, IUpdatedPappie, IStatusError } from "types/types";


export const getAllPuppise = (_req: Request, res: Response, next: NextFunction) : any => {
    if (!puppiesDb) {
      const error = new Error ('Internal Server Error') as IStatusError;
      error.status = 500
      next (error)
    } else {
      return res.status(200).json(puppiesDb);
    }
}
 
export const getPuppyById = (req: Request, res: Response) : any => {  // next: NextFunction // removed, looking for solution 
  const id: number = Number(req.params.id);
  const findPuppyById = puppiesDb.find((puppy) => puppy.id === id);
  if (!findPuppyById) {
    // const error = new Error (`Puppy with ID number ${id} not does not exist`) as StatusError;
    // error.status = 404;
    // next (error)
    res.status(404).json({message : `Puppy with ID number ${id} not does not exist`});
  } else {
    return res.status(200).json(findPuppyById);
  }
}

export const postNewPuppy = (req: Request, res: Response) : any => {
  const puppyData: INewPappie = req.body;
  const {name, breed, birthDate} = puppyData;
  if (name.length < 1 || breed.length < 1 || birthDate.length < 1) {
    res.status(400).json({message : 'Bad request, Please make sure all fields are filled.'});
  } else {
    const newPuppyEntry: IPuppie = {
      id: puppiesDb.length + 1,
      ...puppyData,
    };
    //@ts-ignore
    const dbUpdated = [...puppiesDb, newPuppyEntry];
    return res.status(201).json(newPuppyEntry);
  }
}

export const putUpdatedPuppy = (req: Request, res: Response) : any => {
  const id: number = Number(req.params.id);
  const puppyData: INewUpdatedPappie = req.body;
  if (Object.keys(puppyData).length === 0) {
    res.status(400).json({message : 'Nothing was changed, no data provided.'});
  } else {
    const updatedPuppyEntry: IUpdatedPappie = {
      id: id,
      ...puppyData,
    };
    const filterPuppies = puppiesDb.filter((puppy) => puppy.id !== id);
    const updatedPuppiesDb = [...filterPuppies, updatedPuppyEntry];
    return res.status(200).json(updatedPuppiesDb);
  }
  }

export const deletePuppy = (req: Request, res: Response) : any => {
  const id: number = Number(req.params.id);
  const updatedPuppiesDb = puppiesDb.filter((puppy) => puppy.id !== id);
  if (puppiesDb.length === updatedPuppiesDb.length) {
    res.status(404).json({message : 'Puppy not found'});
  } else {
    return res.status(200).json(updatedPuppiesDb);

  }
}

// The error handler function returns the satatus but does't return enithing in the body
// bug to be solved...

// export const errorHandler = (_err: StatusError, _req: Request, res: Response) => {
//   res.status(404).json({message : `Puppy with ID number ${id} not does not exist`});
// }; 

export const errorHandler = (err: IStatusError, _req: Request, res: Response) => {
  res.status(err.status || 500);
  res.send({
    error: {
      error: err.message
    }
  });
};  