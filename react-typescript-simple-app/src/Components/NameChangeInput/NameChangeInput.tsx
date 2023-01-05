import { IUser } from "../../Types/UserTypes"

interface INameChangeInput { 
    randomUser : IUser,
    onNameChanged(e: React.ChangeEvent<HTMLInputElement>) : void
}

const NameChangeInput = ({randomUser : {name : {first} }, onNameChanged} : INameChangeInput) => {
    return (
        <>
            <input
                type="text"
                name='nameInput'
                value={first}
                onChange={onNameChanged}
            />
        </>
    )
}

export default NameChangeInput