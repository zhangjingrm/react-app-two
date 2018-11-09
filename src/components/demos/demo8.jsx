import React from 'react';

const productList = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class Demo8 extends React.Component {
  render () {
    return (
      <div>
        <h1>demo8-实例</h1>
        <ProductForm />
      </div>
    );
  }
}

class Filter extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      productName: '',
      isSelected: false
    }
  }

  handleChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <form>
        <label>
          <input type="text" name="productName" placeholder="Search" value={this.state.productName} onChange={this.handleChange} />
        </label>
        <label>
          <input type="checkbox" name="isSelected" value={this.state.isSelected} onChange={this.handleChange} />
          Only show products in stock
        </label>
      </form>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render () {
    return (
      <tr><td colSpan="2">{this.props.category}</td></tr>
    );
  }
}

class ProductRow extends React.Component {
  render () {
    var name = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render () {
    var rows = [];
    var lastCategory = null;
    console.log(this.props.inStockOnly, this.props.products)
    this.props.products.forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    console.log(rows, 'rows')
    return (
       <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class ProductForm extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Filter />
        <ProductTable products={productList}/>
      </div>
    );
  }
} 

export default Demo8;