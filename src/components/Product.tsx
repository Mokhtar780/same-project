import { useEffect, useState } from "react";
import addProduct from "./api/addProduct";
import editProduct from "./api/editProduct";
import deleteProduct from "./api/deleteProduct";
import fetchProducts from "./api/fetchProducts";
import { alertTrue, alertError } from "./api/alert";
// import Swal from "sweetalert2";
import Swal, { SweetAlertOptions } from "sweetalert2";
// import {Swal,SweetAlertOptions} from "sweetalert2";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}



const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsEdite, setProductsEdite] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModel, setShowModel] = useState<Product | null>(null);
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputPrice, setInputPrice] = useState<number>(0);
  const [inputDescription, setInputDescription] = useState<string>("");
  const [inputCategory, setInputCategory] = useState<string>("");
  const [inputImage, setInputImage] = useState<string>("");
  const [inputTitle55, setInputTitle55] = useState<string>("");
  const [inputPrice55, setInputPrice55] = useState<number>(0);
  const [inputDescription55, setInputDescription55] = useState<string>("");
  const [inputCategory55, setInputCategory55] = useState<string>("");
  const [inputImage55, setInputImage55] = useState<string>("");

  // Clear inputs after form submission
  const clearInputs = () => {
    setInputTitle("");
    setInputPrice(0);
    setInputDescription("");
    setInputCategory("");
    setInputImage("");
    setInputTitle55("");
    setInputPrice55(0);
    setInputDescription55("");
    setInputCategory55("");
    setInputImage55("");
  };

  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const product = {
      title: inputTitle,
      price: inputPrice,
      description: inputDescription,
      category: inputCategory,
      image: inputImage,
    };
    const success = await addProduct(product);
    if (success) {
      getDataApi();
      clearInputs();
      alertTrue("الأضافة");
    } else {
      alertError("حدث خطأ أثناء إضافة المنتج.");
    }
  };

  const formEdite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (productsEdite) {
      const success = await editProduct(productsEdite.id, {
        title: inputTitle55,
        price: inputPrice55,
        description: inputDescription55,
        category: inputCategory55,
        image: inputImage55,
      });
      if (success) {
        getDataApi();
        clearInputs();
        alertTrue("التعديل");
      } else {
        alertError("حدث خطأ أثناء تعديل المنتج.");
      }
    }
  };

  const getDataApi = async () => {
    const data = await fetchProducts();
    setProducts(data);
    setLoading(false);
  };

  const deleteDataApiById = async (productId: number) => {
    const success = await deleteProduct(productId);
    if (success) {
      getDataApi();
      alertTrue("الحذف");
    } else {
      alertError("حدث خطأ أثناء حذف المنتج.");
    }
  };

  useEffect(() => {
    getDataApi();
  }, []);

  
  const detailsAlert = (pro: Product) => {
    const options: SweetAlertOptions = {
      position: "center",
      color: "#fff",
      width: "80%",
      background: "rgb(26, 32, 99)",
      title: `العنوان : ${pro.title}`,
      text: `الوصف  : ${pro.description}`,
      imageUrl: pro.image,
      imageWidth: 250,
      imageHeight: 200,
      imageAlt: "لم يتم التحميل",
      showCloseButton: true,
      confirmButtonText: "حسناً",
    };
  
    Swal.fire(options);
  };
  
  return (
    <>
      <br />
      <button
        className="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        أضافة منتج جديد
      </button>
      <hr style={{ height: 2, color: "red" }} />
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">رقم</th>
            <th scope="col">صورة</th>
            <th scope="col">العنوان</th>
            <th scope="col">سعر</th>
            <th scope="col">وصف</th>
            <th scope="col">تفاصيل</th>
            <th scope="col">تعديل</th>
            <th scope="col">حذف</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {loading ? (
            <tr>
              <td colSpan={8} className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden"> تحميل البيانات .... </span>
                </div>
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>
                  <img src={product.image} alt="product" style={{
                                                                  maxWidth: 80,
                                                                  maxHeight: 80,
                                                                  minWidth: 80,
                                                                  minHeight: 80,
                                                                  marginRight: 0,
                                                                  borderRadius: "50%",
                                                                  border: "1px solid blue",
                                                                }} />
                </td>
                <td>{product.title.slice(0, 10)}</td>
                <td>${product.price}</td>
                <td>{product.description.slice(0, 25)} ...</td>
                <td>
                <button
                    className="btn btn-outline-info btn-sm"
                    onClick={() => {
                      detailsAlert(product);
                    }}
                  >
                    تفاصيل
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-warning btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropEdite"
                    onClick={() => {
                      setProductsEdite(product);
                      setInputTitle55(product.title);
                      setInputPrice55(product.price);
                      setInputDescription55(product.description);
                      setInputCategory55(product.category);
                      setInputImage55(product.image);
                    }}
                  >
                    تعديل
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setShowModel(product)}
                  >
                    حــذف
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Modal for deletion */}
      <div
        className="modal fade"
        id="exampleModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "rgb(26, 32, 99)", color: "white" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"> حذف المنتج </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {showModel && (
                <>
                  <span style={{ width: "30%" }}>
                    <img src={showModel.image} style={{ maxWidth: 80, borderRadius: "50%", border: "1px solid blue" }} alt="لم يتم تحميل الصورة" />
                  </span>
                  &nbsp;&nbsp;
                  <span style={{ width: "30%", height: "30%" }}>
                    <b> هل تريد حذف هذا المنتج ؟؟ </b>
                  </span>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal"> لا </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => showModel && deleteDataApiById(showModel.id)}> نـعــم </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for adding a new product */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "rgb(26, 32, 99)", color: "white" }}>
            <form onSubmit={formSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel"> أضافة منتج جديد * </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="form-floating m-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingTitle"
                    placeholder="العنوان"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                  />
                  <label htmlFor="floatingTitle"> العنوان </label>
                </div>
                <div className="form-floating m-1">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPrice"
                    placeholder="السعر $"
                    value={inputPrice}
                    onChange={(e) => setInputPrice(Number(e.target.value))}
                  />
                  <label htmlFor="floatingPrice"> السعر </label>
                </div>
                <div className="form-floating m-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingDescription"
                    placeholder="الوصف"
                    value={inputDescription}
                    onChange={(e) => setInputDescription(e.target.value)}
                  />
                  <label htmlFor="floatingDescription"> الوصف </label>
                </div>
                <div className="form-floating m-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingCategory"
                    placeholder="الفئة"
                    value={inputCategory}
                    onChange={(e) => setInputCategory(e.target.value)}
                  />
                  <label htmlFor="floatingCategory">الفئة</label>
                </div>
                <div className="form-floating m-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingImage"
                    placeholder="الصورة"
                    value={inputImage}
                    onChange={(e) => setInputImage(e.target.value)}
                  />
                  <label htmlFor="floatingImage">الصورة</label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> إغلاق </button>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"> حفظ </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal for editing a product */}
      <div
        className="modal fade"
        id="staticBackdropEdite"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropEditeLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "rgb(26, 32, 99)", color: "white" }}>
            <form onSubmit={formEdite}>
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropEditeLabel"> تعــديــل المنتج * </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="form-floating m-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingTitle1"
                    placeholder="Titel"
                    value={inputTitle55}
                    onChange={(e) => setInputTitle55(e.target.value)}
                  />
                  <label htmlFor="floatingTitle1"> العنوان </label>
                </div>
                <div className="form-floating m-1">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingPrice1"
                    placeholder="Price $"
                    value={inputPrice55}
                    onChange={(e) => setInputPrice55(Number(e.target.value))}
                  />
                  <label htmlFor="floatingPrice1"> السعر </label>
                </div>
                <div className="form-floating m-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingDescription1"
                    placeholder="Description"
                    value={inputDescription55}
                    onChange={(e) => setInputDescription55(e.target.value)}
                  />
                  <label htmlFor="floatingDescription1"> الوصف </label>
                </div>
                <div className="form-floating m-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingCategory1"
                    placeholder="Category"
                    value={inputCategory55}
                    onChange={(e) => setInputCategory55(e.target.value)}
                  />
                  <label htmlFor="floatingCategory1"> النوع </label>
                </div>
                <div className="form-floating m-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingImage1"
                    placeholder="Image"
                    value={inputImage55}
                    onChange={(e) => setInputImage55(e.target.value)}
                  />
                  <label htmlFor="floatingImage1"> الصورة </label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> إغلاق </button>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"> تعــديــل </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;