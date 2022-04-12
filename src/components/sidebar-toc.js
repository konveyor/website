import React from 'react'

const SidebarTOC = ({ children }) => {
  return (
    <aside className="md:w-1/3 flex-shrink-0 md:border-r md:border-base-300 pt-4 md:pr-4 pb-4">
      <div className="md:sticky md:top-32">
        <h2 className="my-4 border-b border-base-300 pb-2 text-xl md:text-base font-semibold lg:text-lg">
          On this page
        </h2>
        {children}
        <hr className="mt-12 border border-base-300 md:hidden" />
      </div>
    </aside>
  )
}

export default SidebarTOC
