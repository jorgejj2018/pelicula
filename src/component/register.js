import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import {registroEmailYPass} from '../actions/registerAction'



const Register = () => {

    const dispatch = useDispatch()

    const [formValues, handleInputChange,reset] = useForm({
        email:"",
        pass:"",
    });

    const { email, pass} = formValues;


    const handleRegister = (e) => {
        e.preventDefault();
        console.log(pass,email);
        dispatch(registroEmailYPass(email,pass))
        reset()
    }

    return (
        <>
        <h3 className="title-form-lg">Registrame</h3>
        <form onSubmit={handleRegister} className="form-lg">

            <input
                type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
            />

            <input
                type="password"
                placeholder="Passoword"
                name="pass"
                className="auth__input"
                value={pass}
                onChange={handleInputChange}
            />   

            <button
                type="submit"
                className="btn btn-primary btn-block"
                //disabled ={loading}
            >
                Registrarme
            </button>

            <Link
                to="/login"
                className="link"
            >
                Iniciar Seccion
            </Link>

        </form>
    </>
    )
}

export default Register
