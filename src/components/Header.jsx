import React from 'react'
import '../components/Header.css'
function header() {
  return (
    <div className='container'>
    <nav>
        <img src="https://mail.google.com/mail/u/0?ui=2&ik=8848953615&attid=0.1&permmsgid=msg-f:1798039931774178439&th=18f3ebcaa15e1487&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_REh93tB_7uYVIYtm8jjnlSTdc74TtLIZjMkdkrHfGZeuAgkPhGYfQLkPEtX9nYSlH5sst-1tO_5RSj8PU9RbOGN7fDm0OGhr6Rs4wSre6apUtyoIi2kCF8iI&disp=emb&realattid=ii_lvqqlfa10" alt="" />
        <ul>
            <li><a href="#">Home <i class="fa-solid fa-chevron-down"></i></a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog <i class="fa-solid fa-chevron-down"></i></a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div>
        <i class="fa-solid fa-bars"></i>
        </div>
    </nav>
    </div>
  )
}

export default header