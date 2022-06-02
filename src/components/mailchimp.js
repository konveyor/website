// Embed Mailchimp pop-up script.

import { useEffect } from 'react'

const Mailchimp = () => {
  useEffect(() => {
    const script = document.createElement('script')
    const scriptInner = document.createTextNode(
      '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/180317a04b3c2093d37f905a5/41828d88b1864a1eed5bba950.js")',
    )
    script.id = 'mcjs'
    script.appendChild(scriptInner)
    document.head.appendChild(script)
    return () => {
      script.remove()
    }
  }, [])
}

export default Mailchimp
