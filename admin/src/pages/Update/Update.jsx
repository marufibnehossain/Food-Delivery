import React, { useState, useEffect } from 'react';
import { TbCloudUpload } from "react-icons/tb";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';

const Update = ({ url }) => {
    const { id } = useParams(); // Get the id from the URL
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    });

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const response = await axios.get(`${url}/api/food/${id}`);
                if (response.data.success) {
                    setData({
                        name: response.data.data.name,
                        description: response.data.data.description,
                        price: response.data.data.price,
                        category: response.data.data.category
                    });
                } else {
                    toast.error("Error fetching food data");
                }
            } catch (error) {
                console.error("Error fetching food data:", error);
            }
        };

        fetchFood();
    }, [id, url]);

    const onChangeHandler = (event) => {
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
            const response = await axios.put(`${url}/api/food/update/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.success) {
                toast.success("Food item updated successfully");
                navigate("/list");
            } else {
                toast.error("Error updating food item");
            }
        } catch (error) {
            console.error("Error updating food item:", error);
            toast.error("Error updating food item");
        }
    };

    return (
        <div className='update w-9/12 ms-[max(5vw,25px)] mt-12 text-[#6d6d6d] text-base'>
            <form onSubmit={onSubmitHandler} className='flex flex-col gap-5'>
                {/* Image upload section */}
                <div className="update-img-upload flex flex-col gap-2.5 w-[max(40%,280px)]">
                    <p>Upload Image</p>
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <img className='w-24 mb-2.5' src={image ? URL.createObjectURL(image) : `${url}/images/${data.image}`} alt="" />
                            <TbCloudUpload className='text-3xl mb-4 text-gray-500' />
                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input onChange={(e) => setImage(e.target.files[0])} id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>

                {/* Name, Description, Category, Price sections */}
                <div className="update-product-name flex flex-col gap-2.5 w-[max(40%,280px)]">
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} className='p-2.5 rounded-lg border' type="text" name='name' placeholder='Cheese Burger' />
                </div>
                <div className="update-product-description flex flex-col gap-2.5 w-[max(40%,280px)]">
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} value={data.description} className='p-2.5 rounded-lg border' name="description" rows={6} placeholder='Write description here' required></textarea>
                </div>
                <div className="update-category-price flex gap-7">
                    <div className="update-category flex flex-col gap-2.5">
                        <p>Product Category</p>
                        <select onChange={onChangeHandler} value={data.category} className='max-w-32 p-2.5 rounded-lg border' name="category">
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
                    <div className="update-price flex flex-col gap-2.5">
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} className='max-w-32 p-2.5 rounded-lg border' type="number" name='price' placeholder='$20' />
                    </div>
                </div>
                <button type='submit' className='update-btn max-w-32 border-none p-2.5 bg-black text-white cursor-pointer'> Update Food</button>
            </form>
        </div>
    );
};

export default Update;
