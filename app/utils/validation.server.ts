import * as yup from 'yup'

type LoginData = {
  email: string | null
  password: string | null
}

type LoginValidationReturn =
  | {
      type: 'error'
      errors: Record<string, string[]>
    }
  | { type: 'success'; data: { email: string; password: string } }

const emailValidation = yup
  .string()
  .required('email is required')
  .email('enter a valid email')

const passwordValidation = yup
  .string()
  .required('password is required')
  .min(6, 'password must be minimum of 6 characters')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message: 'does not match the password policy',
    }
  )

const loginSchema = yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
})

const validateLogin = async (
  data: LoginData
): Promise<LoginValidationReturn> => {
  const errors: Record<string, string[]> = {}

  const email = (await emailValidation
    .validate(data.email)
    .catch((e: yup.ValidationError) => {
      errors['email'] = e.errors
    })) as string
  const password = (await passwordValidation
    .validate(data.password)
    .catch((e: yup.ValidationError) => {
      errors['password'] = e.errors
    })) as string
  if (Object.keys(errors).length > 0) {
    return {
      type: 'error',
      errors,
    }
  }

  return {
    type: 'success',
    data: { email, password },
  }
}

export { emailValidation, loginSchema, passwordValidation, validateLogin }
