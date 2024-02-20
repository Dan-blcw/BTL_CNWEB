import React, { useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMesage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMesage(e.target.value);
  };

  const handleSubmit = (e) => {
    if (name !== "" && email !== "" && message !== "") {
      e.preventDefault();
      toast.success("Send message successfully 🎉", {
        autoClose: 3000,
      });
      setName("");
      setEmail("");
      setMesage("");
    }
  };
  return (
    <form className="mt-14 flex flex-col items-center mx-auto w-[700px] pb-24">
      <h2 className="uppercase  mb-2 text-3xl font-bold">Liên lạc</h2>
      <span className="font-thin  italic text-sm">Người mua? Tạo một ghi chú!</span>
      <div className="mt-12 flex flex-row justify-between">
        <div className="mr-16">
          <div className="flex flex-row items-center mb-4">
            <FaLocationDot className="mr-2 text-2xl" />
            <span>Địa điểm: Hanoi, Vietnam</span>
          </div>
          <div className="flex flex-row items-center mb-4">
            <FaPhone className="mr-2 text-2xl" />
            <span>Số điện thoại: 0987654321</span>
          </div>
          <div className="flex flex-row items-center mb-4">
            <MdEmail className="mr-2 text-2xl" />
            <span>Email: michael@gmail.com</span>
          </div>
        </div>
        <div>
          <div className="flex flex-row">
            <input
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
              required
              className="p-2 mr-2 rounded outline-none border-solid border border-black"
            />
            <input
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              type="email"
              required
              className="p-2 rounded outline-none border-solid border border-black"
            />
          </div>
          <div className="mt-4">
            <input
              value={message}
              onChange={handleMessageChange}
              required
              placeholder="Message"
              className="p-2 w-full rounded outline-none  border-solid border border-black "
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="py-2 px-10 text-lg text-white rounded ouline-none uppercase   bg-blue-500 self-end"
      >
        Gửi
      </button>
      <ToastContainer />
    </form>
  );
}

export default Contact;
