import React from 'react'

// IMPORTAMOS LOS COMPONENTES DE HEADER Y FOOTER
import Header from './Header'
import Footer from './Footer'

// IMPORTAMOS LOS ESTILOS DEL COMPONENTE
import '../styles/components/Layout.css'

const Layout = ({children}) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
