import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//import { loginActions } from '../actions/loginActions';
import { loginGoogle } from '../actions/loginActions';
import { loginEmailPass } from '../actions/loginActions';
import {useForm} from '../hooks/useForm';





const Login = () => {
    const dispatch = useDispatch()


    const [formValues,handleInputChange,reset] = useForm({
        email:"",
        pass:"",
      })
      const {email,pass} = formValues;


      const handleLogin = (e) =>{
          e.preventDefault()
          dispatch(loginEmailPass(email, pass));
          reset()
      }

      const handleLoginGoogle = (e) =>{
          e.preventDefault()
          dispatch(loginGoogle())
      }

    return (
        <>
        <h3 className="title-form-lg">Iniciar sección</h3>
        <form onSubmit={handleLogin} className="form-lg">

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
                Acceder
            </button>


            <div className="ctn-lg-social">
                <p>Inicia sección con:</p>

                <div
                    className="ctn-icon-link-lg"
                    onClick={handleLoginGoogle}
                >
                    <div className="icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Ingresar con Google</b>
                    </p>
                </div>

                <div
                    className="ctn-icon-link-lg"
                    onClick={""}
                >
                    <div className="icon-wrapper">
                        <img className="facebook-icon" src=" https://image.flaticon.com/icons/png/512/20/20673.png " alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Ingresar con Facebook</b>
                    </p>
                </div>
            </div>

            <Link
                to="register"
                className="link"
            >
                Crear nueva cuenta
            </Link>

        </form>
    </>
    )
}

export default Login


/* https://image.flaticon.com/icons/png/512/20/20673.png */