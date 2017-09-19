import React from 'react';

class Item extends React.Component {
  state = { item: {} }

  componentDidMount() {
    fetch(`/api/items/${this.props.match.params.id}`)
      .then( res => res.json() )
      .then( item => this.setState({ item }) )
  }

  render() {
    let { item: { dish, spice, price }} = this.state;
    return (
      <div>
        <h1>{dish}</h1>
        <h3>{spice}</h3>
        <h3>{price}</h3>
      </div>
    )
  }
}

// render() {
//   const { items } = this.state;
//   return(
//     <div>
//       {/* <ItemForm item={{}} addItem={this.addItem} /> */}
//       <ul>
//         { items.map(item => {
//           return(
//             <li>
//               <Link to={`/items/${item.id}`}>{item.name}</Link>
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }
// }


export default Item;