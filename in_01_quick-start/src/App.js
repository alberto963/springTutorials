import { version } from 'inferno'
import Logo from './logo'
import './App.css'

const withUser = Component => p => <Component user={ {name: 'Jack Franklin', favouriteColour: 'blue'} } {...p} />
const withExtraSTuff = Component => p => <Component extraStuff='This Works Too' {...p} />

const loginInfo = p => p.user ?
  <p>Logged in as {p.user.name} ... including '{p.extraStuff}'</p> :
  <p>You need to login ... including '{p.extraStuff}'</p>

const AppHeader = p => 
  <div className='App'>
      <Logo width='20' height='20' />
      <p>{`Using Inferno ${version}`}</p>
      <header className='App-header'>
        { loginInfo(p) }
      </header>
  </div>

const ConnectedAppHeader = withExtraSTuff(withUser(AppHeader))

export default ConnectedAppHeader
