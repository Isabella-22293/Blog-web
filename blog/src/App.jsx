import { TokenProvider } from '@hooks/useToken'
import { NavigationProvider } from '@hooks/useNav'
import Router from '../router/Router';
import './App.css'

function App() {
    return (
        <header>
        <TokenProvider>
            <NavigationProvider>
                <Router/>
            </NavigationProvider>
        </TokenProvider>
        </header>
    )
}

export default App;
