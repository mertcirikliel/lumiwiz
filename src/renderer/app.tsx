import { Component } from '@geajs/core'
import CounterNote from './components/counter-note'
import CounterPanel from './components/counter-panel'
import counterStore from './stores/counter-store'

export default class App extends Component {
  template() {
    return (
      <main class="app antialiased">
        <img class="logo" src="./logo.png" alt="Gea" />
        <h1>Hello from Gea.</h1>
        <p class="copy">A tiny starter with a shared store, one class component, and one function component.</p>
        <CounterPanel />
        <CounterNote count={counterStore.count} />
      </main>
    )
  }
}
