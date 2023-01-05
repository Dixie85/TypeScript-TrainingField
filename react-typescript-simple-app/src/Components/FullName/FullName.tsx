import { IUser } from '../../Types/UserTypes';

interface IFillUserName {
    fullName : IUser['name']
};

const FullName = ({ fullName : {title, first, last} } : IFillUserName) => {
    
  return (
    <article>
        <span>{`${title} ${first} ${last}`}</span>
    </article>
  )
}

export default FullName