export { default as Header } from './Header/Header';
export { default as Products } from './Products/Products';
export { default as Footer } from './Footer/Footer';

import React from 'react'
import PropTypes from 'prop-types'

function index(props) {
  return (
    <div>
      <App/>
    </div>
  )
}

index.propTypes = {

}

export default index

