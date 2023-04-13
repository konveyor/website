import * as React from 'react'

export default function Bubbles() {
  return (
    <div
      className="absolute w-full hidden md:flex top-0 left-0 h-full pointer-events-none z-[-1]"
      aria-hidden
    >
      <div
        style={{ top: '180px', left: '15vw' }}
        className="bg-tertiary-100 dark:hidden absolute rounded-full h-10 w-10"
      />

      <div
        style={{ top: '32px', right: '15vw' }}
        className="bg-caution-100 dark:hidden absolute rounded-full h-12 w-12"
      />

      <div
        style={{ bottom: '50px', right: '8vw' }}
        className="bg-warning-100 dark:hidden absolute rounded-full h-12 w-12"
      />

      <div
        style={{ bottom: '140px', left: '10vw' }}
        className="bg-alert-100 dark:hidden absolute rounded-full h-10 w-10"
      />
      <div
        style={{ bottom: '100px', left: '55%' }}
        className="bg-primary-100 dark:hidden absolute rounded-full h-14 w-14"
      />
    </div>
  )
}
