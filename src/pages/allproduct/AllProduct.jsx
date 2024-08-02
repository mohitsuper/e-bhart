import React from 'react'
import Layout from '../../components/layout/Layout'
import Products from '../../components/Products/Products'

export default function AllProduct() {
  return (
    <Layout>
        <div className='my-5'>
          <Products/>
        </div>
    </Layout>
  )
}
