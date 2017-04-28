import React from 'react';

const SearchPanel = (props) => {
  const data = props.data;
  return (
    <div>
      {data.length && data.map((dataObject) => (
        <div> {dataObject.name} </div>
      ))}
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
//         <div class="dropdown show">
//           <a class="btn btn-secondary dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//             Sources
//       </a>

//           <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
//             {this.state.data.map((source) => {
//               <a class="dropdown-item" href="#">{source}</a>
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default SearchPanel;