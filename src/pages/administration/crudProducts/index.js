import React, { useState } from "react";
import CrudProductos from "../../../components/administration/crudProducts";
import FormProduct from "../../../components/administration/crudProducts/form-product";

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
        <FormProduct />
      ) : (
        <FormProduct />
      )}
    </div>
  );
}
