export interface INewPappie{
    name : string,
    breed : string,
    birthDate : string
}

export interface IPuppie extends INewPappie{
    id : number,
}

export interface INewUpdatedPappie {
    name? : string,
    breed? : string,
    birthDate? : string
}

export interface IUpdatedPappie extends INewUpdatedPappie{
    id : number,
}

export interface IError {
    status: number,
    message: string,
}

export interface IStatusError extends Error {
    status?: number
  }
  