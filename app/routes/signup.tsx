import * as React from 'react'
import type { MetaFunction } from 'remix'

export const meta: MetaFunction = () => {
  return {
    title: 'signup',
    description: 'join this awesome app!',
  }
}

const Signup = () => {
  return <h1>signup</h1>
}

export default Signup
