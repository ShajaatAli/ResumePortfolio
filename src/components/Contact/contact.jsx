import './contact.scss'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {
   const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

    return (
    <>
    <div class="background">
      <div class="container">
        <div class="screen">
          <div class="screen-header">
            <div class="screen-header-left">
              <div class="screen-header-button close"></div>
              <div class="screen-header-button maximize"></div>
              <div class="screen-header-button minimize"></div>
            </div>
            <div class="screen-header-right">
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
            </div>
          </div>
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>CONTACT</span>
                <span>ME</span>
              </div>
              <div class="app-contact">CONTACT INFO : 916-519-6783</div>
            </div>
            <div class="screen-body-item">
              <form ref={form} onSubmit={sendEmail} class="app-form">
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="NAME" value="Shajaat Ali"/>
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="EMAIL"/>
                </div>
                <div class="app-form-group">
                  <input class="app-form-control" placeholder="CONTACT NO"/>
                </div>
                <div class="app-form-group message">
                  <input class="app-form-control" placeholder="MESSAGE"/>
                </div>
                <div class="app-form-group buttons">
                  <button class="app-form-button">CANCEL</button>
                  <button class="app-form-button">SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
  
} 

export default Contact
