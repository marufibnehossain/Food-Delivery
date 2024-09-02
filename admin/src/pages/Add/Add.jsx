import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { TbCloudUpload } from "react-icons/tb";
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = () => {
    
    // const url = "https://localhost:4000";
    // const [image, setImage] = useState(false);
    // const [data, setData] = useState({
    //     name: "",
    //     description: "",
    //     price: "",
    //     category: "Salad"
    // })

    // const onChangHandler = (event) =>{
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setData(data=>({...data,[name]:value}))
    // }

    // const onSubmitHandler = async(event)=>{
    //     event.preventDefault();
    //     const formData = new FormData();
    //     formData.append("name", data.name)
    //     formData.append("description", data.description)
    //     formData.append("price", Number(data.price))
    //     formData.append("category", data.category)
    //     formData.append("image", image)
    //     const response = await axios.post(`${url}/api/food/add`, formData);
    //     if(response.data.success){
    //         setData({
    //             name: "",
    //             description: "",
    //             price: "",
    //             category: "Salad"
    //         })
    //         setImage(false)
    //     }
    // }

    const url = "http://localhost:4000";
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    });

    const onChangHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        if (image) {
            formData.append("image", image);
        }

        try {
            const response = await axios.post(`${url}/api/food/add`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.success) {
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Salad"
                });
                setImage(null);
                toast.success(response.data.message)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error("Error uploading data:", error);
        }
    };

  return (
    <div className='add w-9/12 ms-[max(5vw,25px)] mt-12 text-[#6d6d6d] text-base'>
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-5'>
            <div className="add-img-upload flex flex-col gap-2.5 w-[max(40%,280px)]">
                <p>Upload Image</p>
                {/* <label htmlFor="image">
                    <img className='w-32 rounded-lg' src={assets.upload_area} alt="upload-area" />
                </label>
                <input type="file" id='image' hidden required /> */}
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <img className='w-24 mb-2.5' src={image?URL.createObjectURL(image):""} alt="" />
                        <TbCloudUpload className='text-3xl mb-4 text-gray-500 dark:text-gray-400' />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input onChange={(e)=>setImage(e.target.files[0])} id="dropzone-file" type="file" className="hidden" />
                </label>
            </div>
            <div className="add-product-name flex flex-col gap-2.5 w-[max(40%,280px)]">
                <p>Product Name</p>
                <input onChange={onChangHandler} value={data.name} className='p-2.5 rounded-lg border border-[#fff0ed] focus:outline-[#FF4C24] active:outline-[#FF4C24] hover:outline-[#FF4C24]' type="text" name='name' placeholder='Cheese Burger' />
            </div>
            <div className="add-product-description flex flex-col gap-2.5 w-[max(40%,280px)]">
                <p>Product Description</p>
                <textarea onChange={onChangHandler} value={data.description} className='p-2.5 rounded-lg border border-[#fff0ed] focus:outline-[#FF4C24] active:outline-[#FF4C24] hover:outline-[#FF4C24]' name="description" rows={6} placeholder='Write description here' required></textarea>
            </div>
            <div className="add-category-price flex gap-7">
                <div className="add-category flex flex-col gap-2.5">
                    <p>Product Category</p>
                    <select onChange={onChangHandler} value={data.category} className='max-w-32 p-2.5 rounded-lg border border-[#fff0ed] focus:outline-[#FF4C24] active:outline-[#FF4C24] hover:outline-[#FF4C24]' name="category">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Desserts">Desserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add-price flex flex-col gap-2.5">
                    <p>Product Price</p>
                    <input onChange={onChangHandler} value={data.price} className='max-w-32 p-2.5 rounded-lg border border-[#fff0ed] focus:outline-[#FF4C24] active:outline-[#FF4C24] hover:outline-[#FF4C24]' type="number" name='price' placeholder='$20' />
                </div>
            </div>
            <button type='submit' className='add-btn max-w-32 border-none p-2.5 bg-black text-white cursor-pointer'> Add Food</button>
        </form>
    </div>
  )
}

export default Add
