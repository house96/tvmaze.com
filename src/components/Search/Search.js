import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { searchRequest } from '../../actions'
import Preview from '../Preview/Preview'
import './Search.css'

class Search extends Component {
  state = {
    inputValue: ''
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value })
  }

  handleClick = () => {
    const query = this.state.inputValue
    if (query) {
      this.props.searchRequest(query)
      this.setState({ inputValue: '' })
    }
  }

  render() {
    const { results, isLoading, isLoaded, error } = this.props.search

    return (
      <Fragment>
        <div className="t-search">
          <input value={this.state.inputValue} onChange={this.handleChange} />
          <button onClick={this.handleClick} disabled={isLoading}>
            Найти
          </button>
        </div>
        <div className="t-search-result">
          {isLoading && <div className="t-search-loader">Идет поиск...</div>}
          <ul>
            {isLoaded &&
              (error ? (
                <p>Не удалось совершить поиск</p>
              ) : !results.length ? (
                <p>По вашему запросу ничего не найдено</p>
              ) : (
                results.map(result => (
                  <Preview
                    key={result.id}
                    id={result.id}
                    name={result.name}
                    image={
                      result.image && (result.image.medium || result.original)
                    }
                    summary={result.summary}
                  />
                ))
              ))}
          </ul>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ search }) => ({ search })
const mapDispatchToProps = {
  searchRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
