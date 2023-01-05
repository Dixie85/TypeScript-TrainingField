import { IUser } from '../../Types/UserTypes';

interface IUsderHomeAddress {
    homeAddress: IUser['address']
}

const HomeAddress = ({ homeAddress: { country, city, street, number } }: IUsderHomeAddress) => {
    return (
        <article>
            <p>{`Country: ${country}`}</p>
            <p>{`City: ${city}`}</p>
            <p>{`Address: ${street} ${number}`}</p>
        </article>
    )
}

export default HomeAddress