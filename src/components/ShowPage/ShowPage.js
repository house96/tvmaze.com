import React, { Component } from 'react'
import { showRequest } from '../../actions'
import { connect } from 'react-redux'
import './ShowPage.css'

class ShowPage extends Component {
  constructor(props) {
    super(props)
    props.showRequest(props.match.params.id)
  }

  render() {
    const { result, isLoading, error } = this.props.shows

    if (isLoading) return <p>Загружается...</p>
    if (error) return <p>Не удалось загрузить страницу</p>

    const { name, image, summary, _embedded } = result

    return (
      <div className="t-show">
        <div className="t-show__header">
          <h2>{name}</h2>
        </div>
        <div className="t-show__image">
          {image && <img src={image.original || image.medium} alt={name} />}
        </div>
        <div
          className="t-show__summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
        <ul className="t-show__cast">
          {_embedded &&
            _embedded.cast &&
            _embedded.cast.map(item => {
              const { person } = item
              return (
                <li key={person.id} className="t-person">
                  <p>{person.name}</p>
                  <div className="t-person__image">
                    {person.image && (
                      <img
                        src={person.image.medium || person.image.original}
                        alt={person.name}
                      />
                    )}
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ shows }) => ({ shows })
const mapDispatchToProps = {
  showRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage)
