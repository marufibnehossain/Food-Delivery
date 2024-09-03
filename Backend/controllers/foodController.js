import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item 

const addFood = async(req, res) => {

    let image_filename = `${req.file.filename}`;
    
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try{
        await food.save();
        res.json({success:true,message:"Food added"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

// all food list 

const listFood = async(req,res) => {
    try {
        const food = await foodModel.find({});
        res.json({success:true, data:food})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error})
    }
}

// remove food item 

const removeFood = async(req,res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error})
    }
}

// Update food item
const updateFood = async (req, res) => {
    try {
        const { id } = req.params; // Get ID from URL parameters
        const food = await foodModel.findById(id);
        
        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        // Check if a new image is uploaded
        if (req.file) {
            // Remove the old image
            fs.unlink(`uploads/${food.image}`, () => {});

            // Set the new image
            food.image = req.file.filename;
        }

        // Update other fields
        food.name = req.body.name || food.name;
        food.description = req.body.description || food.description;
        food.price = req.body.price || food.price;
        food.category = req.body.category || food.category;

        // Save the updated food item
        await food.save();

        res.json({ success: true, message: "Food updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export {addFood, listFood, removeFood, updateFood}