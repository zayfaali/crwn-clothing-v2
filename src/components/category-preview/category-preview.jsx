import React from "react";
import ProductCard from "../product-card/product-card.compnent";
import { Link } from "react-router-dom";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <Link to={`${title}`}>
        <h2>
          <span className="title">{title.toUpperCase()}</span>
        </h2>
      </Link>

      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
