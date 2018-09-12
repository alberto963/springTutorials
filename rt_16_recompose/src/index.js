import React from "react"
import ReactDOM from 'react-dom'

import withProps from 'recompose/withProps'

import './index.css'

const HomeLink = withProps(({ query }) => ({ href: '#/?query=' + query }))('a')
const ProductsLink = withProps({ href: '#/products' })('a')
const CheckoutLink = withProps({ href: '#/checkout' })('a')

/*
 * The HTML <header> element represents introductory content, typically a group of introductory or navigational aids.
 * It may contain some heading elements but also other elements like a logo, a search form, an author name, and so on.
 * 
 * The HTML <nav> element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents.
 * Common examples of navigation sections are menus, tables of contents, and indexes.
 */
const App = () =>
  <div className="App">
    <header>
      <HomeLink query="logo">Logo</HomeLink>
    </header>
    <nav>
      <HomeLink>Home</HomeLink>
      <ProductsLink>Products</ProductsLink>
      <CheckoutLink>Checkout</CheckoutLink>
    </nav>
  </div>

ReactDOM.render(
  <App />,
  document.getElementById('root')
)