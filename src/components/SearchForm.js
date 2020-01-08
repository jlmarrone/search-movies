import React, { Component } from 'react'

const API_KEY = '74107567'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }

    _handleSubmit = (e) => {
        e.preventDefault()

        const { inputMovie } = this.state

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search = [], totalResults = "0" } = results
                console.log({ Search, totalResults })
                this.props.onResults(Search)
            })
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Find a repository">
                        </input>
                    </div>
                    <div className="control">
                        <a className="button is-info">
                            Movie to Search...
                        </a>
                    </div>
                </div>
            </form>
        )
    }
}
