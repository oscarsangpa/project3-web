import '../../style/styles.scss'
const InputGroup = ({ label, id, name, type, placeholder, register, error }) => {
  return (
    <>
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        // className={`form-control ${error ? 'is-invalid' : ''}`}
        id={id}
        placeholder={placeholder}
        {...register(id)}
      />
    </div>

      <p className="error-form">{error}</p>
    </>
  )
}

InputGroup.defaultProps = {
  type: 'text'
}

export default InputGroup;