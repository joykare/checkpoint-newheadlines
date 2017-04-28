import React, { Component } from 'react';
import request from 'superagent';
import SearchPanel from '../components/SearchPanel.jsx';

class SearchPanelContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
    this.fetchSources = this.fetchSources.bind(this);
  }

  componentDidMount() {
    this.fetchSources().then((response) => {
      console.log("response", response);
      this.setState({
        data: response.body.sources
      });
    })
  }

  fetchSources() {
    return(
      request
        .get('https://newsapi.org/v1/sources?language=en')
    )
  }
  
  render() {
    return (
      <div>
        <SearchPanel data={this.state.data} />
      </div>
    );
  }
}

export default SearchPanelContainer;