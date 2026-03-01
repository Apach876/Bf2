import React from "react";

export default function ProductItem({ product, onEdit, onDelete }) {
    return (
        <div className="productRow">
            <div className="productMain">
                {product.image && (
                    <div className="productImage">
                        <img src={product.image} alt={product.name} />
                    </div>
                )}
                <div className="productInfo">
                    <div className="productName">{product.name}</div>
                    <div className="productCategory">{product.category}</div>
                    <div className="productDescription">{product.description}</div>
                    <div className="productMeta">
                        <span className="productPrice">{product.price} ₽</span>
                        <span className="productStock">Остаток: {product.stock} шт.</span>
                        {product.rating > 0 && (
                            <span className="productRating">★ {product.rating}</span>
                        )}
                    </div>
                </div>
            </div>
            <div className="productActions">
                <button className="btn" onClick={() => onEdit(product)}>
                    Редактировать
                </button>
                <button className="btn btn--danger" onClick={() => onDelete(product.id)}>
                    Удалить
                </button>
            </div>
        </div>
    );
}