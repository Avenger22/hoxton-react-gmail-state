// #region 'IMPORTING COMPONENTS AND STUFF'
import Header from './components/Header'
import initialEmails from './data/emails'
import { useState } from 'react'
import './App.css'
// #endregion

function App() {

  // Use initialEmails for state
  console.log(initialEmails)

  // #region 'STATE OBJECT'
  const [hideRead, setHideRead] = useState(false)
  const [emails, setEmails] = useState(initialEmails)
  // #endregion

  console.log(emails)

  let emailsToDisplay = emails //this is key to render emails gets array from state

  function toggleHideRead() {
    setHideRead(!hideRead)
  }

  if (hideRead === true) {
    emailsToDisplay = emailsToDisplay.filter(email => !email.read)
  }

  function lengthStarredEmails() {
    let emailsStarred = []
    return emailsStarred = emailsToDisplay.filter(email => email.starred === true)
  }

  function lengthReadEmails() {
    let emailsRead = []
    return emailsRead = emailsToDisplay.filter(email => email.read === false)
  }

  function toggleStar(emailParam, emailId) {
    let getOnlyOne = []
    getOnlyOne = emailsToDisplay.filter(email => email.id === emailId)
    const emailStar = getOnlyOne.starred
    emailParam.starred = !emailStar
  }

  function toggleRead(emailParam, emailId) {
    let getOnlyOne = []
    getOnlyOne = emailsToDisplay.filter(email => email.id === emailId)
  }

// #region 'RETURNING AND CREATING HTML SPITTING HTML'
  return (
    <div className="app">
  
      <Header />

      <nav className="left-menu">

        <ul className="inbox-list">

          <li className="item active">
            <span className="label">Inbox</span>
            <span className="count">{lengthReadEmails().length}</span>
          </li>

          <li className="item">
            <span className="label">Starred</span>
            <span className="count">{lengthStarredEmails().length}</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              onClick={toggleHideRead}
              checked={hideRead}
            />
          </li>

        </ul>

      </nav>

      <main className="emails">

        <ul className='emails-ul'>

          {
            emailsToDisplay.map(email => (
              <li className="email">
                <input type="checkbox" checked={false} className='box-checkbox' 
                onClick={function () {toggleRead(email, email.id)}}/>

                <input type="checkbox" checked={email.starred} className='star-checkbox' 
                onClick={function () {toggleStar(email, email.id)}}/>

                <span className=''>{email.sender}{' '}</span>
                <span className='title'>{email.title}{' '}</span>
              </li>
          ))}

        </ul>

      </main>

    </div>
  )

}
// #endregion

export default App