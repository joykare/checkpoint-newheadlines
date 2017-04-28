import React from 'react';
import { Layout, Drawer, Navigation } from 'react-mdl';

const SearchPanel = (props) => {
  const data = props.data;
  return (
    <div style={{ height:1000, position: 'relative' }}>
      <Layout fixedDrawer>
        <Drawer title="Sources">
          <Navigation>
            {data.length && data.map((dataObject) => (
              <a href="#" key={dataObject.id}>{dataObject.name}</a>
            ))}
          </Navigation>
        </Drawer>
      </Layout>
    </div>
  );
};

export default SearchPanel;

// import React, { Component } from 'react';
// import request from 'superagent';

// class SearchPanel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: {}
//     }
//     this.fetchSources = this.fetchSources.bind(this);
//   }

//   componentDidMount() {
//     this.fetchSources().then((response) => {
//       this.setState({
//         data: response.body.sources
//       })
//     })
//   }

//   fetchSources() {
//     return (
//       request
//         .get('https://newsapi.org/v1/sources?language=en')
//     )
//   }

//   render() {
//     return (
//       <div>
//         <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
//       </div>
//     );
//   }
// }

// export default SearchPanel;