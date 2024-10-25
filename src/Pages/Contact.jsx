import React from 'react'
import Header from '../Components/Header'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  let navigate = useNavigate()

  const onSubmit = (data) => {
    return (
      toast.success("Successfully Register!", {
        position: "top-center",
      })
    )
  }

  return (
    <>
      <Header />
      <div className="ContactUsPage">
        <div className="ContactUsForm">
          <h4 style={{ textAlign: "center" }}>Contact Us</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='Full Name' className='nameInput' {...register("name", { required: true })} />
            {errors.name && <span>This field is required</span>}

            <input type='email' placeholder='Email' className='nameInput' {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}

            <input type='password' placeholder='Password' className='nameInput' {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}

            <textarea placeholder='Type Your Message' rows={4} className='nameInput' {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}

            <input type="submit" className='submitBtn' />
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact