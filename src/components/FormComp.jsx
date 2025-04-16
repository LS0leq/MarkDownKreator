import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import './css/FormComp.css';


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
                <input placeholder="np. Login123" {...register('name', {required: true})}/>
                {errors.name && <p>Musisz podać swój login</p>}
                <input placeholder="np. Hasło123!@#" type="password" {...register('password', {required: true})}/>
                {errors.password && <p>Musisz podać swoje hasło</p>}
                <input type="submit"/>
                {succesMessage && <p>{succesMessage}</p>}
            </form>
        </div>
    );
};

export default FormComp;