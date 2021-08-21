import prisma from '../prisma'
import { sessionExpirationTime } from './session.server'

const getUserFromSessionId = async (id: string) => {
  return prisma.session.findUnique({
    where: { id },
    select: { user: true },
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
      expirationDate: new Date(Date.now() + sessionExpirationTime),
    },
  })
}

const deleteSession = async (id: string) => {
  return prisma.session.delete({ where: { id } })
}

export { createSession, deleteSession, getUserFromEmail, getUserFromSessionId }
