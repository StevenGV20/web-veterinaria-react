import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductById } from "../../../../api/products";
import Breadcrumb from "../../../widgets/breadcrumb";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./_.css";

export default function FormProduct(props) {
  //const { title, id } = props;
  const links = [
    //{ name: "Administration", url: "/administration/", actual: false },
    { name: "Products", url: "/administration/products", actual: false },
    { name: "Products", url: "", actual: true },
  ];
  const idproducto = props.match.params.id;
  const [product, setProduct] = useState({});
  const [files, setFiles] = useState([]);
  const [desHTML, setDesHTML] = useState("<></>");

  useEffect(() => {
    (async () => {
      try {
        const data = await getProductById(idproducto);
        setProduct(data);
      } catch (error) {
        setProduct({
          idproducto: "",
          descripcionHTML: "",
          descripcionSimple: "",
          foto1: "",
          foto2: "",
          foto3: "",
          marca: "",
          nombre: "",
          precio: "",
          stock: "",
          idcategoria: {
            idcategoria: "",
            nombre: "",
          },
        });
      }
    })();
  }, [idproducto]);

  /*  useEffect(() => {
    //console.log("initialProduct", product);
    //console.log("2", Object.keys(product).length);
  }, [product]); */

  const onChangeFiles = (e) => {
    var filesR = e.target.files;
    var filesArr = Array.prototype.slice.call(filesR);
    setFiles([...files, ...filesArr]);
  };

  const removeFile = (f) => {
    setFiles(files.filter((x) => x !== f));
  };

  const onSubmit = () => {
    setProduct({ ...product, descripcionHTML: desHTML });
    console.log("productSubmit", { ...product, descripcionHTML: desHTML });
  };

  const onChange = (e) => {
    console.log("changeproduct", product);
    let newProducto = { ...product };
    if (e.target.name && e.target.name.trim() !== "") {
      newProducto[e.target.name] = e.target.value;
      setProduct(newProducto);
    }
    //console.log(product);
  };

  return (
    <div className="form-product-container admin-container">
      <Breadcrumb links={links} />
      <h1>EditProduct</h1>
      <form className="form-container">
        <div className="form-du-group">
          <div className="form-group">
            <label className="form-title">Nombre</label>
            <input
              className="form-input"
              value={product.nombre}
              name="nombre"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="form-du-group">
          <div className="form-group">
            <label className="form-title">Marca</label>
            <input
              className="form-input"
              value={product.marca}
              name="marca"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label className="form-title">Stock</label>
            <input
              className="form-input"
              value={product.stock}
              name="stock"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="form-du-group">
          <div className="form-group">
            <label className="form-title">Precio</label>
            <input
              className="form-input"
              value={product.precio}
              name="precio"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label className="form-title">Categoria</label>
            <select className="form-input" name="categoria" onChange={onChange}>
              <option></option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-title">Descripcion Simple</label>
          <textarea
            className="form-input"
            value={product.descripcionSimple}
            name="descripcionSimple"
            onChange={onChange}
            rows={6}
          ></textarea>
        </div>
        <div className="form-group">
          <label className="form-title">Descripcion HTML:</label>
          <div className="form-product-ckeditor">
            <CKEditor
              editor={ClassicEditor}
              data={product.descripcionHTML}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setDesHTML(data);
                //onChange({ target: { name: "descripcionHTML", value: data } });
                //console.log({ event, editor, data });
                //setProduct({ ...product, descripcionHTML: data });
              }}
              onBlur={(event, editor) => {
                //console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                //console.log("Focus.", editor);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-title">Foto:</label>
          <div className="flex">
            <label className="border border-black inline-block py-2 px-4 cursor-pointer">
              <input
                className="hidden"
                multiple
                type="file"
                onChange={onChangeFiles}
              />
              Upload
            </label>
          </div>
          <div className="form-product-files-container">
            {files.map((x, index) => (
              <div
                className="form-product-files-card"
                onClick={removeFile.bind(this, x)}
                key={index}
              >
                {x.name}
                <img
                  src={URL.createObjectURL(x)}
                  alt=""
                  className="w-40 h-40"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="form-container-buttons">
          <Link
            className="btn btn-red form-button"
            to="/administration/products"
          >
            Cancelar
          </Link>
          <button
            className="btn btn-indigo form-button"
            type="button"
            onClick={onSubmit}
          >
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
}
