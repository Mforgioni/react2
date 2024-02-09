import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { bd } from "../../services/firebase/firebaseConfig";
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../notification/NotificationService";
import OrderForm from "../OrderForm/OrderForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { cart, total, clearCart } = useCart();
  const { showNotification } = useNotification();

  const createOrder = async (userData) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: userData,
        items: cart,
        total,
      };

      const orderCollection = collection(bd, "orders"); 
      const { id } = await addDoc(orderCollection, objOrder);

      setOrderId(id);

      clearCart();
    } catch (error) {
      showNotification("error", "Hubo un error al crear la orden");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando su orden, por favor, espere...</h1>;
  }

  if (orderId) {
    return <h1>El id de su compra es: {orderId}</h1>;
  }

  return (
    <>
      <h1>CHECKOUT</h1>
      <OrderForm onSubmit={createOrder} />
    </>
  );
};

export default Checkout;
