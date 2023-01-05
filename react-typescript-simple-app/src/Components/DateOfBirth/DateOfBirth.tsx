import { IUser } from '../../Types/UserTypes';

interface IUserDateOfBirth {
    dateOfBirth : IUser['dob']

}
const DateOfBirth = ({dateOfBirth : {date, age}} : IUserDateOfBirth) => {
  return (
    <article>
        <p>{date.slice(0, 10)}</p>
        <p>{age}</p>
    </article>
  )
}

export default DateOfBirth