class Component {
  constructor(props = {}, state = {}) {
    this.props = props
    this.state = state
  }
  update() {}
  #updater(){
    this.update(this.render())

    this.componentDidUpdate()
  }

  // ciclo de vida
  componentWillMount() {

  }
  componentDidMount() {

  }
  componentDidUpdate() {
  }

  //nuevo estado
  setState(newState) {
    this.state = {
      ...this.state,
      ...newState
    }
    this.#updater()
  }

  //renderizar el nuevo evento
  build() {
    this.componentWillMount()
    return this.render()
  }
}
  
export { Component }