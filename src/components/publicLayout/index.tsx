import React from 'react'
import Header from './../header'

interface IPublicLayoutProps {
  headerProps?: React.ReactNode;
  children: React.ReactNode;
  title?: string;
}

const PublicLayout: React.FC<React.PropsWithChildren<IPublicLayoutProps>> = ({ children }) => {
  return (
     <div className="page-wrapper">
          <Header />
          {children}
     </div>
  )
}

export default PublicLayout