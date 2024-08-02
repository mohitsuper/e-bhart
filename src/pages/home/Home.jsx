import { useContext } from 'react'
import Category from '../../components/Category/Category'
import { Hero } from '../../components/Hero/Hero'
import Layout from '../../components/layout/Layout'
import Products from '../../components/Products/Products'
import Testimonial from '../../components/testimonial/Testimonial'
import Track from '../../components/track/Track'
import myContext from '../../context/myContext'

export default function Home() {
  const context = useContext(myContext);
  let name = context;
  return (
    <Layout>
      <Hero/>
      <Category/>
      <Products/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}
