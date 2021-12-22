import React, { useEffect, useState } from "react";
import Table from "../../widgets/table";
import { Edit, Delete } from "@mui/icons-material";
import "./_.css";
import { Link } from "react-router-dom";
import Breadcrumb from "../../widgets/breadcrumb";
import { getProductsByPage } from "../../../api/products";
import Pagination from "../../pagination";
import ModalMessage from "../../widgets/modalMessage";
import FormProduct from "./form-product";

export default function CrudProductos() {
  const cols = [
    "ID",
    "Nombre",
    "Stock",
    "Precio",
    "Foto",
    "Editar",
    "Eliminar",
  ];

  const [products, setProducts] = useState([]);
  const [data, setData] = useState(0);
  const [viewModal, setViewModal] = useState(false);

  const fetchProducts = async (page) => {
    const data = await getProductsByPage(page);
    setData(data);
    setProducts(data.content);
  };

  useEffect(() => {
    (async () => {
      await fetchProducts();
    })();
  }, []);

  const links = [
    //{ name: "Administration", url: "/administration/", actual: false },
    { name: "Products", url: "/administration/products", actual: true },
  ];

  return (
    <div className="admin-container crud-products-container">
      <div>
        <Breadcrumb links={links} />
      </div>
      <div className="w-full text-xl">Lista de Productos</div>
      <div className="text-left mb-8">
        <Link
          className="btn btn-indigo mb-8 ml-0 relative"
          to="/administration/products/new"
        >
          New Product
        </Link>
      </div>
      <Table cols={cols}>
        {products.map((product) => (
          <tr key={product.nombre}>
            <td className="table-container-td">
              <span className="title">{product.idproducto}</span>
            </td>
            <td className="table-container-td">
              <span className="title">{product.nombre}</span>
            </td>
            <td className="table-container-td">
              <span className="">{product.stock}</span>
            </td>
            <td className="table-container-td">
              <span className="">{product.precio}</span>
            </td>
            <td className="table-container-td">
              <img className="image" src={product.foto1} alt="" />
            </td>
            <td className="table-container-td">
              <Link className="icon-edit" to={`products/${product.idproducto}`}>
                <Edit />
              </Link>
            </td>
            <td className="table-container-td">
              <button
                className="icon-delete"
                onClick={() => setViewModal(true)}
              >
                <Delete />
              </button>
            </td>
          </tr>
        ))}
      </Table>
      {viewModal && (
        <ModalMessage
          onClose={() => setViewModal(false)}
          title={"Desea eliminar el producto?"}
        >
          <FormProduct id={1} title="Edit Product" />
        </ModalMessage>
      )}

      <Pagination
        totalPages={data.totalPages}
        pageActual={data.number}
        onPage={fetchProducts}
        numberOfElements={data.numberOfElements}
        totalElements={data.totalElements}
      />
    </div>
  );
}
