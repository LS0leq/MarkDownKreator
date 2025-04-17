import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './css/FormComp.css';
import { Link } from "react-router-dom";

const FormRegistration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [successMessage, setSuccessMessage] = useState('');

    const onSubmit = (data) => {
        console.log(data);
        setSuccessMessage('Zarejestrowano pomyślnie');
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Rejestracja</h1>
                <div>
                    <label>Podaj imię</label>
                    <input placeholder="np. NowyLogin" type="text" {...register('name', { required: true })} />
                    {errors.name && <p>Musisz podać swoje imię</p>}
                    <br />

                    <label>Wprowadź login</label>
                    <input placeholder="np. NowyLogin" type="text" {...register('login', { required: true })} />
                    {errors.name && <p>Musisz podać swój login</p>}
                    <br />

                    <label>Wprowadź hasło</label>
                    <input placeholder="np. BezpieczneHasło123!" type="password" {...register('password', { required: true })} />
                    {errors.password && <p>Musisz podać hasło</p>}
                    <br />

                    <input type="submit" value="Zarejestruj się" />
                    {successMessage && <p>{successMessage}</p>}
                </div>

                <Link to="/login">Masz już konto? <p>Zaloguj się!</p></Link>
            </form>
        </div>
    );
};

export default FormRegistration;
