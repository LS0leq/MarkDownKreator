import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import './css/FormComp.css';
import {Link, useNavigate} from "react-router-dom";


const FormComp = () => {
    const{ register, handleSubmit, formState: { errors } } = useForm();
    const [succesMessage, setSuccesMessage] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading]=useState(false);

    const onSubmit = (data) => {
        setIsLoading(true);

        fetch('https://markdownbackend-qcro.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(async (res) => {
                if (res.ok) {
                    const userData = await res.json();
                    setSuccesMessage('Zalogowano pomyślnie!');
                    console.log(userData)

                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('id', userData.user.id);
                    localStorage.setItem('name', userData.user.name);

                    navigate('/dashboard');
                } else {
                    setSuccesMessage('Błędny login lub hasło');
                }
            })
            .catch(err => console.error(err))
            .finally(()=>{
                setIsLoading(false);
        })
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Logowanie</h1>
                <div>
                    <label>Wprowadź login</label>
                    <input placeholder="np. NowyLogin" type="text" {...register('login', { required: true, minLength:{
                            value: 3,
                            message: 'Login musi mieć co najmniej 3 znaki',
                        },
                        pattern:{
                            value: /^[a-zA-Z0-9]+$/,
                            message: 'Login może zawierać tylko litery i cyfry',
                        },
                    })} />
                    {errors.login && <p>{errors.login.message}</p>}
                    <br />

                    <label>Wprowadź hasło</label>
                    <input placeholder="np. BezpieczneHasło123!" type="password" {...register('password', { required: true, minLength:{
                            value: 8,
                            message: 'Hasło musi mieć co najmniej 8 znaków',
                        },
                    })} />
                    {errors.password && <p>{errors.password.message}</p>}
                    <input type="submit" value="Wyślij" onSubmit={handleSubmit}/>
                    {isLoading && <div className="spinner"></div>}
                    {succesMessage && <p>{succesMessage}</p>}

                </div>

                <Link to="/register">Nie masz konta? <p>Zarejestruj się!</p></Link>
            </form>
        </div>
    );
};

export default FormComp;