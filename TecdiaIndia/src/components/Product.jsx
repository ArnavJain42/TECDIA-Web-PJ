import ProductSlider from "./ProductSlider";

const Product = () => {
  return (
    <div className="App-body">

    <div className="App">
      <div className="container">
        <header className="header">
          <h1>Our Technologies</h1>
          <p>Discover our cutting-edge solutions across multiple industries</p>
        </header>
        <ProductSlider />
      </div>
    </div>
    </div>
  );
}

export default Product;
