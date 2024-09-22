import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/frontend_assets/assets";
import axios from "axios";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "https://food-delivery-backend-q3fa.onrender.com";
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    const addToCart = async (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if (token) {
            await axios.post(url+"/api/cart/add", {itemId},{headers:{token}})
        }
    }

    const removeFromCart = async (itemId)=>{
        // setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        setCartItems((prev) => {
            if (prev[itemId] > 1) {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            } else {
                const { [itemId]: removedItem, ...rest } = prev;
                return rest; // Remove item completely if count is 0
            }
        });
        if (token) {
            await axios.post(url+"/api/cart/remove", {itemId},{headers:{token}})
        }
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    } 

    const fetchFoodList = async () => {
        // const response = await axios.get(url+"/api/food/list");
        // setFoodList(response.data.data)
        try {
            const response = await axios.get(url + "/api/food/list");
            setFoodList(response.data.data);
        } catch (error) {
            console.error("Error fetching food list", error.response || error);
        }
    }

    // const loadCartData = async () => {
    //     // try {
    //     //     const response = await axios.post(url + "/api/cart/get", {},{headers:{token}});
    //     //     setCartItems(response.data.cartData);
    //     // } catch (error) {
    //     //     console.error("Error loading cart data", error.response || error);
    //     // }
    //     if (token) {
    //         try {
    //             const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
    //             setCartItems(response.data.cartData);
    //         } catch (error) {
    //             console.error("Error loading cart data:", error.response || error);
    //             if (error.response?.status === 401) {
    //                 console.log("Token might be expired or invalid.");
    //                 localStorage.removeItem("token");
    //                 setToken("");
    //             }
    //         }
    //     }
    // }

    const loadCartData = async () => {
        // console.log("Token used for API call:", token);
        if (token) {
            try {
                const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
                // console.log("Cart data response:", response.data);
                setCartItems(response.data.cartData);
            } catch (error) {
                console.error("Error loading cart data:", error.response || error);
                if (error.response?.status === 401) {
                    console.log("Token might be expired or invalid.");
                    localStorage.removeItem("token");
                    setToken("");
                }
            }
        }
    }


    useEffect(() => {
        async function loadData() {
            try {
                await fetchFoodList();
                const savedToken = localStorage.getItem("token");
                if (savedToken) {
                    setToken(savedToken); // Update state
                    await loadCartData();
                } else {
                    console.log("No token found.");
                }
            } catch (error) {
                console.error("Error accessing localStorage or initializing data", error);
            }
        }
        loadData();
    }, [token]); // Initial load
    

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;