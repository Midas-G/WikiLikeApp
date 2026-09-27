
import MMain from './Components/MMain'
import Nav from './Components/NavBar/Nav'
import SettingsModal from './Components/Modals/SettingsModal'
import SearchManager from './Managers/SearchManager'
import ArticleManager from './Managers/ArticleManager'

import SettingsProvider from './Providers/SettingsProvider'
import SearchProvider from './Providers/SearchProvider'
import WidthProvider from './Providers/WidthProvider'

function App() {

  return (
    <>
      <SettingsProvider>
        <SearchProvider>
          <WidthProvider>

          <SettingsModal />
          <Nav />
          
          <MMain>
            <ArticleManager />
          </MMain>

          <SearchManager />

          </WidthProvider>
        </SearchProvider>
      </SettingsProvider>
    </>
  )
}

export default App
