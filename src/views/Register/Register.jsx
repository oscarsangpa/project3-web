import { useState } from 'react' 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom'
import InputGroup from "../../components/InputGroup/InputGroup"
import { register as registerRequest } from '../../services/AuthService';
import "../../components/InputGroup/form.scss"


const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
}).required();

const Register = () => {
  const [backErrors, setBackErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    setBackErrors({})
    setIsSubmitting(true)

    const bodyFormData = new FormData()

    const { image, ...rest } = data

    Object.keys(rest).forEach(key => {
      bodyFormData.append(key, rest[key])
    })

    if (image[0]) {
      bodyFormData.append('image', image[0])
    }


    registerRequest(bodyFormData)

      .then((user) => {
        navigate('/login')
      })
      .catch(err => {
        setBackErrors(err?.response?.data?.errors)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  };

  return (
    <div className='container-form' >
      <h1 className='title'>Register</h1>

      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
          placeholder="Name"
          id="name"
          register={register}
          error={backErrors?.name || errors.name?.message}
        />
        <InputGroup
          placeholder="Email"
          id="email"
          register={register}
          error={backErrors?.email || errors.email?.message}
          type="email"
        />
        <InputGroup
          placeholder="Password"
          id="password"
          register={register}
          error={backErrors?.password || errors.password?.message}
          type="password"
        />
        <InputGroup
          placeholder="User image"
          id="image"
          register={register}
          error={backErrors?.image || errors.image?.message}
          type="file"
        />

        <button className={`btn btn-${isSubmitting ? 'secondary' : 'primary'}`}>{isSubmitting ? 'Creating user...' : 'Submit'}</button>
      </form>
        <p>
        Are user now? login <Link to={"/login"}> here </Link>
        </p>
    </div>
  )
}

export default Register;
