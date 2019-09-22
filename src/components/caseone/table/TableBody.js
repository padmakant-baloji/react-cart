import React from "react";
import Validation from "../../../components/error/error";

const TableBody = props => {
  const { row, indexValue, handleChange, removeProduct } = props;
  return (
    <tbody className="caseone-cart">
      <tr>
        <td>
          <input
            type="text"
            id="productId"
            name="productId"
            placeholder="ProductId"
            onChange={evt => handleChange(evt, indexValue)}
            value={row.productId}
          />
          <button className="caseone-button">
            <i className="fa fa-arrows-h caseone-icon"></i>
          </button>
          <Validation field="productId" value={row.productId} />
        </td>
        <td>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="ProductName"
            onChange={evt => handleChange(evt, indexValue)}
            value={row.productName}
          />
          <Validation field="productName" value={row.productName} />
        </td>
        <td>
          <input
            type="text"
            id="qty"
            name="qty"
            placeholder="qty"
            onChange={evt => handleChange(evt, indexValue, true)}
            value={row.qty}
          />
          <Validation field="qty" value={row.qty} />
        </td>
        <td>
          <input
            type="text"
            id="unitPrice"
            name="unitPrice"
            placeholder="Unit Price"
            onChange={evt => handleChange(evt, indexValue, true)}
            value={row.unitPrice}
          />
          <Validation field="unitPrice" value={row.unitPrice} />
        </td>
        <td>
          <input
            type="text"
            id="totalPrice"
            name="totalPrice"
            placeholder="Total Price"
            value={row.totalPrice}
            disabled
          />
        </td>
        <td>
          <textarea
            type="text"
            id="notes"
            name="notes"
            placeholder="Notes"
            onChange={evt => handleChange(evt, indexValue)}
            value={row.note}
          ></textarea>
        </td>
        <td>
          <button
            className="caseon-delete"
            onClick={() => removeProduct(indexValue)}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
