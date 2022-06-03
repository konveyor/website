import React from 'react'

const headComponents = [
  <script
    key="mcjs"
    id="mcjs"
    dangerouslySetInnerHTML={{
      __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/180317a04b3c2093d37f905a5/41828d88b1864a1eed5bba950.js")`,
    }}
  />,
]

export const onRenderBody = ({ setBodyAttributes, setHeadComponents }) => {
  setBodyAttributes({
    className: 'bg-base-100 dark:bg-base-0',
  })
  setHeadComponents(headComponents)
}
