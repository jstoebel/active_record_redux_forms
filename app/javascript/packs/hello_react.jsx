// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import PropTypes from 'prop-types'

const Hello = props => (
  <div>Hello {props.name}! This is the react component.</div>
)

Hello.defaultProps = {
  name: 'Jacob'
}

Hello.propTypes = {
  name: PropTypes.string
}

export default Hello