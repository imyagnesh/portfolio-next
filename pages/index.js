import Head from 'next/head'
import HomeAbout from '../components/HomeAbout'
import HomeBanner from '../components/HomeBanner'
import HomeBlog from '../components/HomeBlog'
import HomeContact from '../components/HomeContact'
import HomeEducation from '../components/HomeEducation'
import HomeExperience from '../components/HomeExperience'
import HomePortfolio from '../components/HomePortfolio'
import HomeTestimonials from '../components/HomeTestimonials'
import HomeWork from '../components/HomeWork'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeAbout />
      <HomeWork />
      <HomeTestimonials />
      <HomeExperience />
      <HomeEducation />
      <HomePortfolio />
      <HomeBlog />
      <HomeContact />
    </div>
  )
}
