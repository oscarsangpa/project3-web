import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputGroup from "../../components/InputGroup/InputGroup";
import { useState } from "react";
import { login as loginRequest } from "../../services/AuthService";
import { useAuthContext } from "../../contexts/AuthContext";
// import styles from "./login.module.css"
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import "../../components/InputGroup/form.scss"

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
}).required();


const Login = () => {
  const {theme} = useTheme()
  const navigate = useNavigate()
  let location = useLocation();

  let from = location.state?.from?.pathname || "/profile";

  const { login } = useAuthContext()

  const [error, setError] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    setIsSubmitting(true)
    setError()

    loginRequest(data)
      .then(response => {
        login(response.access_token, () => navigate(from, { replace: true }))
      })
      .catch((err) => {
        setError(err?.response?.data?.message)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  };
  return ( 
    <div className={theme}>
    <div className="background">

    <div className="container-form">
    <h1 className="title-form">Login</h1>

    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputGroup
        placeholder="Email"
        id="email"
        register={register}
        error={errors.email?.message}
        type="email"
      />
      <InputGroup
        placeholder="Password"
        id="password"
        register={register}
        error={error || errors.password?.message}
        type="password"
      />

      <button className={`btn btn-${isSubmitting ? 'secondary' : 'primary'}`}>{isSubmitting ? 'Login...' : 'Sign In'}</button>
      <p>
      Don't have an account? Register <Link className="link-auth" to={"/register"}> here </Link>
        </p>
    </form>
  </div>
    </div>
    </div>
)
}
 
export default Login;