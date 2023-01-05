export interface IUser {
    name: {
      title: string,
      first: string,
      last: string
    };
    dob: {
      age: number,
      date: string
    };
    address: {
      country: string,
      city: string,
      street: string,
      number: number
    };
    info: {
      cell: string,
      email: string,
      phone: string
    };
    picture : {picture: string}
  }