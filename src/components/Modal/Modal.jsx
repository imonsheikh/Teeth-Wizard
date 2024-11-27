import React from "react";

const Modal = () => {


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
    
  }

  return (
    <div>
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* form starts */}
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              First Name: 
              <input
              name="Fname"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />  
              Last Name: 
              <input
               name="Lname"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />  
              Email: 
              <input
              name="email"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />  
              Phone Number: 
              <input
              name="phone"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />  
              Appointment Date: 
              <input
              name="date"
              type="date"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />  
              Address: 
              <input
              name="address"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
            />  
            </div>
            <button className="btn btn-primary" type="submit">Make Appointment</button>
          </form>
          {/* form ends  */}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
