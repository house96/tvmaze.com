import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './Preview.css'

class Preview extends PureComponent {
  render() {
    const { id, name, image, summary } = this.props

    return (
      <li className="t-preview">
        <div className="t-preview__header">
          <Link className="t-link" to={`/shows/${id}`}>
            <h2>{name}</h2>
          </Link>
        </div>
        <div className="t-preview__image">
          {image && <img src={image} alt={name} />}
        </div>
        <div
          className="t-preview__summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </li>
    )
  }
}

export default Preview
