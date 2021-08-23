import React from 'react'
import PropTypes from 'prop-types'
import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
