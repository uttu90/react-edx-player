import React, { Component } from 'react';


class BulkLine extends Component {
  state = {
    text: ''
  }
  componentDidMount() {
    this.editor.focus();
  }
  
  componentWillMount() {
    window.addEventListener('keyup', this.handleKeyPress.bind(this));    
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyPress.bind(this));
  }
  
  render() {
    return (
      <div className="bulk">
        <textarea className="bulk__input"
          ref={editor => this.editor = editor }
          onChange={this.handleChange.bind(this)} 
          value={this.state.text} 
        />
        <button
          className="bulk__submit"
          onClick={this.onComposing.bind(this)}
        >
          Compose
        </button>
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  onComposing() {
    const { text } = this.state;
    this.props.addBulk(text.split("\n"));
    this.setState({
      text: ''
    })
  }

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      const { text } = this.state;
      this.props.addBulk(text.split("\n"));
      this.setState({
        text: ''
      })
    }
  }
}

export default BulkLine;