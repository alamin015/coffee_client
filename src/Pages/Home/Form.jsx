import React from 'react'
import Swal from 'sweetalert2';

const Form = () => {


    const handleForm = (e) => {
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
        fetch("http://localhost:5000/data",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user_info)
        })
        .then(res => res.json())
        .then(data => {
           
            if(data.insertedId){
                form.reset();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }


  return (
    <div className='py-14'>
        <div className="container mx-auto">
            <form onSubmit={handleForm} className=' max-w-[800px] w-full mx-auto shadow-lg p-7'>
                {/* group  */}
                <div className="sm:flex items-center gap-2 mb-3">
                <input type="text" name="first" placeholder="First Name" className="input input-bordered w-full mb-3 sm:mb-0" />
                <input type="text" name="last" placeholder="Last Name" className="input input-bordered w-full mb-3 sm:mb-0" />
                </div>
                {/* group  */}
                <div className="sm:flex items-center gap-2 mb-3">
                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered w-full mb-3 sm:mb-0" />
                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full mb-3 sm:mb-0" />
                </div>
                <textarea name="message" className="textarea textarea-bordered w-full textarea-lg" placeholder="Your Message"></textarea>
                <button className='text-semibold text-white text-xl w-full py-2 px-7 rounded-lg bg-primary mt-4'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Form