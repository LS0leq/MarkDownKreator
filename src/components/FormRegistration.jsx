import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './css/FormComp.css';
import { Link } from "react-router-dom";

const FormRegistration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [succesMessage, setSuccesMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => {
        setIsLoading(true);
        fetch('https://markdownbackend-qcro.onrender.com/register',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.ok) {
                    setSuccesMessage('Zarejestrowano pomyślnie!');
                } else {
                    setSuccesMessage('Błędny login lub hasło');
                }
            })
            .catch(err=> console.log(err))
            .finally(()=>{
                setIsLoading(false);
            })
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Rejestracja</h1>
                <div>
                    <label>Podaj imię</label>
                    <input placeholder="np. NowyLogin" type="text" {...register('name', { required: true, minLength: {
                            value: 3,
                            message: 'Login musi mieć co najmniej 3 znaki',
                        },
                        maxLength: {
                            value: 20,
                            message: 'Login może mieć maksymalnie 20 znaków',
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: 'Login może zawierać tylko litery i cyfry',
                        },
                    })} />
                    {errors.name && <p>{errors.name.message}</p>}
                    <br />

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

                    <br />

                    <input type="submit" value="Zarejestruj się" />
                    {isLoading && <div className="spinner"></div>}
                    {succesMessage && <p>{succesMessage}</p>}
                </div>

            </form>
        </div>
    );
};

export default FormRegistration;
