import * as React from 'react'

import { MetaFunction, LinksFunction, LoaderFunction } from 'remix'
import { useRouteData } from 'remix'

import stylesUrl from '../styles/index.css'
import { withUser } from '../utils/session.server'

export let meta: MetaFunction = () => {
  return {
    title: 'awesome app!',
    description: 'welcome to the awesome app!',
  }
}

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

export let loader: LoaderFunction = async ({ request }) => {
  return withUser(request, (_, user) => {
    return { user }
  })
}

export default function Index() {
  let data = useRouteData()

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
