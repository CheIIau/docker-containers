import { type Component } from 'solid-js'
import { useRoutes } from '@solidjs/router'
import styles from './App.module.css'
import routes from './router'

const App: Component = () => {
  const Routes = useRoutes(routes)
  return (
    <div class={styles.App}>
      <div class={styles.main}>
        <Routes />
      </div>
    </div>
  )
}

export default App
