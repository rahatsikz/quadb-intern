import React from "react";

const FormModal = ({ data, modalClose, setData }) => {
  const { show } = data;
  const { name, id } = show;
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const viewer = form.viewer.value;
    const email = form.email.value;
    const phone = form.phone.value;
    // console.log(viewer, email, phone);

    const user = {
      viewer,
      email,
      phone,
    };

    localStorage.setItem("user", JSON.stringify(user));
    modalClose();
  };
  return (
    <div>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={id}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type here"
              defaultValue={name}
              className="input input-bordered w-full focus:outline-none"
              readOnly
            />
            <input
              type="text"
              name="viewer"
              placeholder="Enter Full Name"
              className="input input-bordered w-full focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="input input-bordered w-full focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone"
              className="input input-bordered w-full focus:outline-none"
            />

            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
