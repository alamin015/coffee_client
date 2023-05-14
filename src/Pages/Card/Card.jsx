import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';

const Card = () => {
    const [ok,setOk] = useState(false);
    const[user,setUser] = useState([]);
    // const user = useLoaderData();



    useEffect(() => {
        fetch("http://localhost:5000/card")
        .then(res => res.json())
        .then(data => setUser(data))
    },[ok])


    const handleRemove = (e) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:5000/remove/${e}`,{
            method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount>0){
                    setOk(!ok);
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
            })
            }
          })

    }


  return (
    <div className='py-14'>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    user && user.map(item => <div key={item._id} className='shadow-xl p-7 rounded-lg'>
                        <h3>name : {item.first_name} {item.last_name}</h3>
                        <p>email: {item.email}</p>
                        <p>password: {item.password}</p>
                        <p className='w-full'>message: {item.message}</p>
                        <Link to={`/details/${item._id}`}><button className='text-semibold text-white text-xl w-full py-2 px-7 rounded-lg bg-primary mt-4'>Edit</button></Link>

                        <button className='text-semibold text-white text-xl w-full py-2 px-7 rounded-lg bg-red-600 mt-4' onClick={()=>handleRemove(item._id)}>Delete</button>
                    </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default Card