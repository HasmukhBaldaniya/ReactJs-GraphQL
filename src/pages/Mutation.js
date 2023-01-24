import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: { name: $name, quantityPerUnit: $quantityPerUnit }) {
      record {
        name
      }
    }
  }
`;

export default function MutationComp() {
  const [formData, setFormData] = useState({ name: "", quantityPerUnit: 0 });

  const [OnCreateProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: { ...formData },
    }
  );
  return (
    <div>
      <div>
        <input
          type={"text"}
          placeholder="Enter product name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />{" "}
        <br />
        <br />
        <input
          type={"number"}
          placeholder="Enter no. of quantity unit"
          onChange={(e) => setFormData({ ...formData, quantityPerUnit: e.target.value })}
        />{" "}
        <br />
        <br />
        <button type="button" onClick={OnCreateProduct}>
          Create
        </button>
      </div>
    </div>
  );
}
