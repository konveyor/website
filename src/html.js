import React from 'react'

export default function HTML(props) {
  return (
    <html className="light" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' *; script-src 'self' 'unsafe-inline' 'unsafe-eval' www.google-analytics.com www.googletagmanager.com chimpstatic.com *.list-manage.com; font-src 'self' fonts.gstatic.com data:; img-src www.googletagmanager.com ssl.gstatic.com www.gstatic.com data: *; style-src 'self' 'unsafe-inline' fonts.googleapis.comi tagmanager.google.com; frame-src 'self' www.slideshare.net www.youtube.com www.googletagmanager.com"
        ></meta>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}
