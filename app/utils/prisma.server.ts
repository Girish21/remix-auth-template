import prisma from '../prisma'
import { generateHash } from './bcrypt.server'
import { sessionExpirationTime } from './session.server'

const geExpirationDate = () => new Date(Date.now() + sessionExpirationTime)

const getUserFromSessionId = async (id: string) => {
  return prisma.session.findUnique({
    where: { id },
    select: { user: { select: { email: true, id: true, firstName: true } } },
  })
}

const createUserIfNotExist = async (
  email: string,
  password: string,
  name: string
) => {
  const userExist = await prisma.user.findUnique({ where: { email } })

  if (userExist) {
    throw new Error('accout with this email already exist, please login')
  }

  const hashPassword = await generateHash(password)

  return prisma.user.create({
    data: {
      email,
      password: hashPassword,
      firstName: name,
    },
    select: { id: true },
  })
}

const getUserFromEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
    select: { id: true, email: true, password: true },
  })
}

const createSession = async (id: string) => {
  return prisma.session.create({
    data: {
      userId: id,
      expirationDate: geExpirationDate(),
    },
  })
}

const deleteSession = async (id: string) => {
  return prisma.session.delete({ where: { id } })
}

export {
  createSession,
  createUserIfNotExist,
  deleteSession,
  getUserFromEmail,
  getUserFromSessionId,
}
