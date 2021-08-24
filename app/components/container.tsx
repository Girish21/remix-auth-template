import clsx from 'clsx'
import * as React from 'react'

const AppContainer: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  return (
    <main
      {...props}
      className={clsx([
        'mt-[-76px] flex-1 flex flex-col justify-center items-center',
        props.className,
      ])}
    />
  )
}

export default AppContainer
