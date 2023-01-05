import { IUser } from '../../Types/UserTypes';

interface IUserPhoto {
    userPhoto : IUser['picture']
}

const UserPhoto = ({userPhoto : {picture}} : IUserPhoto) => {
  return (
    <article>
        <img src={picture} alt="Random user" />
    </article>
  )
}

export default UserPhoto