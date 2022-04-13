import { useState } from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import InputGroup from "../../components/InputGroup/InputGroup";
import { register as registerRequest } from '../../services/UsersService'

// const schema = yup.object({
//   email: yup.string().email().required(),
//   name: yup.string().required(),
//   password: yup.string().min(8, 'funciona').required()
// }).required();

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [backErrors, setBackErrors] = useState[{}]
  const navigate = useNavigate()
  // const { register, handleSubmit, formState:{ errors } } = useForm({
  //   resolver: yupResolver(schema)
  // });

  const onSubmit = data => {
    setBackErrors({})
    setIsSubmitting(true)

    registerRequest(data)
      .then((user) => {
        navigate('/login')
      })
      .catch(err => {
        setBackErrors(err?.response?.data?.errors)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }
  return ( 
    <>
      <h4>Register</h4>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup 
        label="Name"
        id="name"
        register={register}
        type="name"
      />
      <InputGroup 
        label="Email"
        id="email"
        register={register}
        type="email"
      />
      <InputGroup 
        label="Password"
        id="password"
        register={register}
        type="password"
      />
      </form> */}
    </>
   );
}
 
export default Register;