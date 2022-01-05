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
  const [showRead, setShowRead] = useState(false)
  const [emails, setEmails] = useState(initialEmails)
  // #endregion

  console.log(emails)
  let emailsToDisplay = emails //this is key to render emails gets array from state

// #region 'RETURNING AND CREATING HTML SPITTING HTML'
  return (
    <div className="app">
  
      <Header />

      <nav className="left-menu">

        <ul className="inbox-list">

          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>

          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>

        </ul>

      </nav>

      <main className="emails">

        <ul className='emails'>

          {
            emailsToDisplay.map(email => (
              <li className="email">
                <input type="checkbox" checked={false} className='box-checkbox'/>
                <input type="checkbox" checked={false} className='star-checkbox'/>
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