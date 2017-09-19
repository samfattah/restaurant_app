import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Menu extends React.Component {
  state = { items: [] }

  componentDidMount() {
    axios.get('/api/items')
      .then( res => res.json() )
      .then( items => this.setState({ items }) )
  }

//   render() {
//     let { items } = this.state;
//       return(
//         <ul>
//           { items.map( p =>
//             <li key={p.id}>
//               <Link to={`/items/${p.id}`}>{p.name}</Link>
//             </li>
//           )
//         }
//       </ul>
//     )
//   }
// }
render() {
  const { items } = this.state;
  return(
    <div>
      {/* <ItemForm item={{}} addItem={this.addItem} /> */}
      <ul>
        { items.map(item => {
          return(
            <li>
              <Link to={`/items/${item.id}`}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
}


export default Menu;