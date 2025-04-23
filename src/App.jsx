import { useState } from 'react'
import './App.css'



const FormPage = () => {
    const [value, setValue] = useState({username: '', pass: '', email: ''})

    const handleChange = (e) => {
        const { name, value }  = e.target
        setValue(prevState => ({...prevState, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('https://6808131f942707d722dd3cda.mockapi.io/users/forms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            })
        }
        catch (error) {
            console.log('ошибка:', error)
        }
        setValue({ username: '', pass: '', email: ''})
    }
    console.log(value)

    return (
        <div className={'App'}>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    placeholder="Username..."
                    value={value.username}
                    onChange={handleChange}
                />
                <input
                    name="email"
                    placeholder="Email..."
                    value={value.email}
                    onChange={handleChange}
                    type="email"
                />
                <input
                    name="pass"
                    placeholder="Password..."
                    type="password"
                    value={value.pass}
                    onChange={handleChange}
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default FormPage;

