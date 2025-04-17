import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import './css/FormComp.css';
import {Link} from "react-router-dom";


const FormComp = () => {
    const{ register, handleSubmit, formState: { errors } } = useForm();
    const [succesMessage, setSuccesMessage] = useState('');

    const onSubmit = (data)=>{
        console.log(data);
        setSuccesMessage('Zalogowano pomyślnie');

    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Logowanie</h1>
                <div>
                    <label>Wprowadź login</label>
                    <input placeholder="np. Login123" type="text" {...register('login', {required: true})}/>
                    {errors.name && <p>Musisz podać swój login</p>}
                    <br/>
                    <label>Wprowadź hasło</label>
                    <input placeholder="np. Hasło123!@#" type="password" {...register('password', {required: true})}/>
                    {errors.password && <p>Musisz podać swoje hasło</p>}
                    <input type="submit" value="Wyślij"/>
                    {succesMessage && <p>{succesMessage}</p>}

                </div>

                <Link to="/register">Nie masz konta? <p>Zarejestruj się!</p></Link>
            </form>
        </div>
    );
};

export default FormComp;