import React from 'react'
import AppStore from '../../../Images/Appstore.png'
import PlayStore from '../../../Images/playstore.png'
import './Footer.css'

const footer = () => {
  return (
    <footer id='footer'>
      <div className='leftFooter'>
        <h3>Download our app</h3>
        <p>Download our app for android and IOS mobile phone</p>
        <img src={AppStore} alt='AppStore'></img>
        <img src={PlayStore} alt='PlayStore'></img>
      </div>
      <div className='midFooter'>
        <h1>ECommerce</h1>
        <p>High quality is our first priority</p>
        <p>CopyRight &copy; VishalMahale </p>
      </div>
      <div className='rightFooter'>
        <h4>Follow us</h4>
        <a href='https://www.youtube.com'>Instagram</a>
        <a href='https://www.youtube.com'>Facebook</a>
        <a href='https://www.youtube.com'>Twitter</a>
      </div>
    </footer>
  )
}

export default footer
