// If the final word is no more than 10 characters, replace the space
// before it with non-breaking space so that it does not end up on a
// line by itself.

import React from 'react'

const WidowControl = ({ text }) => {
  return <>{text.replace(/ ([^ ]{1,10})$/, '\u00a0$1')}</>
}

export default WidowControl
