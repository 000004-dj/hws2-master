import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (a: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (a: string) => void, setName: (a: string) => void, addUserCallback: (a: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name.trim() === '') {
        return setError("Ошибка! Введите имя!")

    } else {

        setName('')
        addUserCallback(name)
    }

}

export const pureOnBlur = (name: string, setError: (a: string) => void) => {
    if (name.trim() === '') {
        return setError("Ошибка! Введите имя!")
    } else {
        return setError('')
    }
    // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: (e: KeyboardEvent<HTMLInputElement>) => void) => {
    if (e.key === "Enter") {
        addUser(e)
    }
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to f

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any

        setName(e.currentTarget.value) // need to fix
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users[users.length - 1]?.name// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
