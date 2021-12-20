import React, { useState } from "react";
import CrudProductos from "../../../components/administration/crudProducts";
import EditProduct from "../../../components/administration/crudProducts/edit-product";

export default function CrudProductosPage() {
  const [component, setComponent] = useState("crud");
  const goToEdit = () => {
    setComponent("edit");
  };
  return (
    <div>
      {component === "crud" ? (
        <CrudProductos goToEdit={goToEdit} />
      ) : component === "edit" ? (
        <EditProduct />
      ) : (
        <EditProduct />
      )}
    </div>
  );
}
