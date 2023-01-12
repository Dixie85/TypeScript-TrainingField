export interface INewPappie{
    name : string,
    breed : string,
    birthDate : string
}

export interface IPuppie extends INewPappie{
    id : string | undefined,
}

export interface IPuppieWithCrypto extends INewPappie{
    id : string,
}

export interface INewUpdatedPappie {
    name : string,
    breed : string,
    birthDate : string
}

export interface IUpdatedPappie extends INewUpdatedPappie{
    id : string | undefined,
}

export interface IError {
    status: number,
    message: string,
}

export interface IStatusError extends Error {
    status?: number
  }
  