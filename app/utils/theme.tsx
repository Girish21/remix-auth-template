import * as React from 'react'

const ssrThemeScript = `
  ;(() => {
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const documentCl = document.documentElement.classList;
    documentCl.add(theme);

    const meta = document.querySelector('meta[name="color-scheme"]');

    if (!meta) return;

    if (theme === 'dark') {
      meta.content = 'dark light';
    } else {
      meta.content = 'light dark';
    }
  })();
`

const SSRTheme = () => {
  return (
    <>
      <meta name='color-scheme' content='dark light' suppressHydrationWarning />
      <script dangerouslySetInnerHTML={{ __html: ssrThemeScript }} />
    </>
  )
}

export default SSRTheme
