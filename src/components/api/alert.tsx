import Swal from "sweetalert2";

const alertTrue = (text: string) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: `تم ${text} بنجاح`,
    showConfirmButton: false,
    timer: 1500,
  });
};

const alertError = (message: string) => {
  Swal.fire("خطأ", message, "error");
};

export { alertTrue, alertError };