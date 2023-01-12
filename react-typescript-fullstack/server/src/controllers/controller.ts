import { Request, Response } from "express";
import { puppiesDb as DB} from "../../db/db";
import { INewPappie, INewUpdatedPappie, IPuppieWithCrypto, IUpdatedPappie } from "types/types";
// import { randomUUID } from 'crypto'

let puppiesDb = DB;

export const getAllPuppise = (_req: Request, res: Response) : any => {
  return res.status(200).json(puppiesDb);
}
 
export const getPuppyById = (req: Request, res: Response) : any => {  
  const id = req.params.id;
  const findPuppyById = puppiesDb.find((puppy) => puppy.id === id);
  if (!findPuppyById) {
    res.status(404).json({message : `Puppy with ID number ${id} not does not exist`});
  } else {
    return res.status(200).json(findPuppyById);
  }
}

export const postNewPuppy = (req: Request, res: Response) : any => {
  const puppyData: INewPappie = req.body;
  const {name, breed, birthDate} = puppyData;
  if ( !name || !breed || !birthDate || name === '' || breed === '' || birthDate === '') {
    res.status(400).json({message : 'Bad request, Please make sure all fields are filled.'});
  } else {
    const newPuppyEntry: IPuppieWithCrypto = {
      id: puppiesDb.length.toString(),
      ...puppyData,
    };
    //@ts-ignore
    puppiesDb = [...puppiesDb, newPuppyEntry];
    return res.status(201).json(newPuppyEntry);
  }
}

export const putUpdatedPuppy = (req: Request, res: Response) : any => {
  const id = req.params.id;
  const findPuppyById = puppiesDb.find((puppy) => puppy.id === id);
  const puppyData: INewUpdatedPappie = req.body;
  const {name, breed, birthDate} = puppyData;
  
  if (!findPuppyById) {
     return res.status(400).json({message : 'Not valid ID.'})
  } else if ( name.length < 1 && breed.length < 1 && birthDate.length < 1) {
    res.status(400).json({message : 'Nothing was changed, no data provided.'});
  } else {
    const updatedPuppyEntry: IUpdatedPappie = {
      id: id,
      ...puppyData,
    };
    const filterPuppies = puppiesDb.filter((puppy) => puppy.id !== id);
    puppiesDb = [...filterPuppies, updatedPuppyEntry];
    return res.status(200).json({message : 'The puppy was updated'});
  }
}

export const deletePuppy = (req: Request, res: Response) : any => {
  const id = req.params.id;
  const updatedPuppiesDb = puppiesDb.filter((puppy) => puppy.id !== id);
  if (puppiesDb.length === updatedPuppiesDb.length) {
    res.status(404).json({message : 'Puppy not found'});
  } else {
    puppiesDb = updatedPuppiesDb;
    return res.status(200).json({message : 'The Puppy was deleted'});
  }
}
