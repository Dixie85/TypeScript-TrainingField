import axios from 'axios';
import { IUser } from '../Types/UserTypes';

export const getRandomUserData = async () : Promise<IUser | void> => {
    try {
      const singleRandomUser = await axios('https://randomuser.me/api/');
      const userData = singleRandomUser.data.results[0];
        return {
          name: {
            title: userData.name.title,
            first: userData.name.first,
            last: userData.name.last
          },
          dob: {
            age: userData.dob.age,
            date: userData.dob.date
          },
          address: {
            country: userData.location.country,
            city: userData.location.city,
            street: userData.location.street.name,
            number: userData.location.street.number
          },
          info: {
            cell: userData.cell,
            email: userData.email,
            phone: userData.phone
          },  
          picture : {
            picture: userData.picture.large
          }
        }

    } catch (error) {
      console.log(error);
    }
  }