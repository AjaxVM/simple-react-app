// simple tool to handle module styles and global styles in a predictable way

class Steyel {
  constructor (...styles) {
    this._styles = styles
    this._props = this.parseProps()
  }

  parseProps () {
    const props = {}
    for (const style of this._styles) {
      for (const prop in style) {
        const newCls = style[prop]
        if (props[prop]) {
          props[prop] = `${props[prop]} ${newCls}`
        } else {
          props[prop] = newCls
        }
      }
    }

    return props
  }

  cls (...props) {
    // create classNames as all props passed, and their lookups in the code
    const clsNames = [...props, ...props.map(prop => this._props[prop]).filter(prop => !!prop)]

    return clsNames.join(' ')
  }
}

export default Steyel