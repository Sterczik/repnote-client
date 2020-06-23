import React, { Component } from 'react'

class CustomImageInput extends Component {
  constructor(props) {
    super(props)
    this.fileUpload = React.createRef()
    this.showFileUpload = this.showFileUpload.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
  }

  state = {
    file: undefined,
    imagePreviewUrl: undefined
  }

  showFileUpload() {
    if (this.fileUpload) {
      this.fileUpload.current.click()
    }
  }

  handleImageChange(e) {
    e.preventDefault()
    let reader = new FileReader()
    let file = e.target.files[0]
    if (file) {
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        })
      }
      reader.readAsDataURL(file)
      this.props.setFieldValue(this.props.field.name, file)
    }
  }

  showPreloadImage() {
    const { errorMessage } = this.props
    const { file, imagePreviewUrl } = this.state

    let comp = null

    if (errorMessage) {
      comp = <div>{ errorMessage }</div>
    } else if (file) {
      comp = (
        <img src={imagePreviewUrl} alt="..." />
      )
    } else {
      comp = <div></div>
    }
    return comp
  }

  render() {
    const { title } = this.props
    const { name } = this.props.field

    return (
      <div>
        <input
          id={name}
          name={name}
          type="file"
          onChange={this.handleImageChange}
          ref={this.fileUpload}
        />
        <p>
          {title}
        </p>
        <div onClick={this.showFileUpload}>
          {this.showPreloadImage()}
        </div>

        {/* {errorMessage ? (
          <span>{errorMessage}</span>
        ) : null} */}
      </div>
    )
  }
}

export default CustomImageInput
