import { Link } from 'react-router-dom';




const login = () => {



    return (
        <>
        <h3 className="title-form-lg">Iniciar sección</h3>
        <form onSubmit={""} className="form-lg">

            <input
                type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                autoComplete="off"
                value={""}
                onChange={""}
            />

            <input
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
                value={""}
                onChange={""}
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
                    onClick={""}
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

export default login


/* https://image.flaticon.com/icons/png/512/20/20673.png */