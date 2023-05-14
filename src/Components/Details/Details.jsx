import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Details = () => {
    const data = useLoaderData();
    const Navigate = useNavigate();

    const {_id,first_name,last_name,email,password,message} = data;

    const handleUpdate = (e) => {
      e.preventDefault();
        const form = e.target;
        const first_name = form.first.value;
        const last_name = form.last.value;
        const email = form.email.value;
        const password = form.password.value;
        const message = form.message.value;
        const user_info = {
            first_name,last_name,email,password,message
        }
        fetch(`http://localhost:5000/update/${_id}`,{
          method: "PUT",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(user_info)
        })
        .then(res => res.json())
        .then(data => {
          if(data.modifiedCount > 0){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'User Updated Successfully',
              showConfirmButton: false,
              timer: 2000
            })
            Navigate("/card");
          }
        })
    }



  return (
    <div className='py-14'>
      <div className="container mx-auto">
        <div className="w-full h-screen flex items-center justify-center">
        <form onSubmit={handleUpdate} className=' max-w-[800px] w-full mx-auto shadow-lg p-7'>
                {/* group  */}
                <div className="sm:flex items-center gap-2 mb-3">
                <input type="text" name="first" defaultValue={first_name} className="input input-bordered w-full mb-3 sm:mb-0" />
                <input type="text" name="last" defaultValue={last_name} className="input input-bordered w-full mb-3 sm:mb-0" />
                </div>
                {/* group  */}
                <div className="sm:flex items-center gap-2 mb-3">
                <input type="email" name="email" defaultValue={email} className="input input-bordered w-full mb-3 sm:mb-0" />
                <input type="text" name="password" defaultValue={password} className="input input-bordered w-full mb-3 sm:mb-0" />
                </div>
                <textarea name="message" className="textarea textarea-bordered w-full textarea-lg" defaultValue={message}></textarea>
                <button className='text-semibold text-white text-xl w-full py-2 px-7 rounded-lg bg-primary mt-4'>Update</button>
                
            </form>
        </div>
      </div>
    </div>
  )
}

export default Details