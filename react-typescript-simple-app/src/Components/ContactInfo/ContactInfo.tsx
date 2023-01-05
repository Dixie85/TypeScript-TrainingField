import { IUser } from '../../Types/UserTypes';

interface IUserContactInfo {
    contactInfo : IUser['info']
}

const ContactInfo = ({contactInfo : { cell, email, phone}} : IUserContactInfo) => {
  return (
    <article>
        <p>{`Cell: ${cell}`}</p>
        <p>{`Phone: ${phone}`}</p>
        <p>{`E-mail: ${email}`}</p>
    </article>
  )
}

export default ContactInfo