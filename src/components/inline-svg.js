import React, { useState, useEffect, useRef } from 'react'

const InlineSVG = ({ path, ...other }) => {
  const ImportedSVGRef = useRef(null)
  const [loading, setLoading] = useState(false)
  console.log(`path = ${path}`)

  useEffect(() => {
    setLoading(true)

    const importSVG = async () => {
      console.log('starting importSVG()')
      try {
        ImportedSVGRef.current = (await import(`${path}`)).ReactComponent
        console.log('ImportedSVGRef = ', ImportedSVGRef)
      } catch (err) {
        throw err
      } finally {
        console.log('importSVG done?')
        setLoading(false)
      }
    }
    importSVG()
  }, [path])
  console.log(`loading = ${loading} ImportedSVGRef = `, ImportedSVGRef)

  if (!loading && ImportedSVGRef.current) {
    const { current: ImportedSVG } = ImportedSVGRef
    console.log(`returning imported SVG`)
    return <ImportedSVG {...other} />
  }

  return null
}

export default InlineSVG
