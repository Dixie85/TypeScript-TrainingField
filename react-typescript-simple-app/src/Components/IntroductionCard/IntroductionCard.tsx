import { IUser } from '../../Types/UserTypes';
import ContactInfo from '../ContactInfo/ContactInfo';
import DateOfBirth from '../DateOfBirth/DateOfBirth';
import FullName from '../FullName/FullName';
import HomeAddress from '../HomeAddress/HomeAddress';
import UserPhoto from '../UserPhoto/UserPhoto';

interface IUserIntroductionCard{
    randomUser : IUser
}

const IntroductionCard = ({randomUser : {name, dob, address, info, picture} } : IUserIntroductionCard) => {
  return (
    <section>
        <div>IntroductionCard</div>
        <FullName fullName={name}/>
        <DateOfBirth dateOfBirth={dob}/>
        <HomeAddress homeAddress={address}/>
        <UserPhoto userPhoto={picture}/>
        <ContactInfo contactInfo={info} />
    </section>
  )
}

export default IntroductionCard