/* import {useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, documentId } from "firebase/firestore";
import { db } from "../../firebase/client";
import { collection, writeBatch, query, where, getDocs } from "firebase/firestore";
import Loading from "../Loading/Loading";

const Checkout = () => {
    const [orderId, setOrderId] = useState(" ");
    const [isLoading, setIsLoading] = useState(false); 

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({ name, phone, email}) => {
        try {
            setIsLoading(true);

            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, "productos")

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))
            
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {

                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                }else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, "orders")

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }else{
                console.error("no hay productos")
            }
        } catch (error) {
            console.error("no hay productos")
        }finally{
            setIsLoading(false)
        }
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }


    return (  
        <div>
            {isLoading && <Loading />}
            <h1>Checkout</h1>
            <div>{createOrder}</div>
        </div>      
    )
}

export default Checkout; */