import React, { useEffect, useState } from "react";
import Table from "../../widgets/table";
import { Edit, Delete } from "@mui/icons-material";
import axios from "axios";
import "./_.css";
import { Link } from "react-router-dom";
import Breadcrumb from "../../widgets/breadcrumb";

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

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://veterinaria-web-server-rest.herokuapp.com/producto/lista"
      );
      const data = response.data;
      setProducts(data);
    })();
  }, []);
  const links = [
    //{ name: "Administration", url: "/administration/", actual: false },
    { name: "Products", url: "/administration/products", actual: true },
  ];
  return (
    <div className="crud-products-container">
      <div>CrudProductos</div>
      <div>
        <Breadcrumb links={links} />
      </div>
      <Table cols={cols}>
        {products.map((product) => (
          <>
            <tr>
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
                <Link
                  className="icon-edit"
                  to={`products/edit-product/${product.idproducto}`}
                >
                  <Edit />
                </Link>
              </td>
              <td className="table-container-td">
                <button
                  className="icon-delete"
                  onClick={() => console.log(product.idproducto)}
                >
                  <Delete />
                </button>
              </td>
            </tr>
          </>
        ))}
      </Table>
    </div>
  );
}
