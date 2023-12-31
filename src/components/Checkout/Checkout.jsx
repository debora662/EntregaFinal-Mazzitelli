import {useContext, useState} from "react";
import {CartContext} from "../../context/CartContext";
import { Link } from "react-router-dom";
import {Timestamp, getDocs, writeBatch, collection, addDoc, query, where, documentId} from "firebase/firestore";
import {db} from "../../firebase/client";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);

            const outOfStock = []

            const ids = cart.map(prod => prod.id);

            const productsRef = collection(db, "productos");

            const productsAddedFromFirestore = await getDocs(
                query(productsRef, where(documentId(), 'in', ids))
            )

            const {docs} = productsAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart
                    ?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, {
                        stock: stockDb - prodQuantity
                    })
                } else {
                    outOfStock.push({
                        id: doc.id,
                        ...dataDoc
                    })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, "orders")

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()

            } else {
                console.error("Hay productos que no tienen Stock")
            }
        } catch (error) {
            console.error("Error al crear un pedido")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center sm:mt-10 lg:mt-30 h-screen">
            {
                loading && (
                    <h2 className="text-2xl text-slate-500 mt-48 font-semibold animate-pulse">
                        Generando Orden....
                    </h2>
                )
            }

            {
                orderId && (
                    <div
                        className="flex flex-col items-center justify-center mt-24 bg-slate-200 p-20 rounded-md shadow-md">
                        <h2 className="text-2xl text-black font-semibold">
                            Orden Generada: {orderId}
                        </h2>
                        <p className="mt-10 text-center text-slate-900 text-lg text-semibold mb-4">Gracias por elegirnos 😃!!!</p>
                        <div> 
                            <Link to="/" className="text-blue-500 underline">Volver a Home</Link>
                        </div>
                    </div>
                )
            }
            {
                !loading && !orderId && (
                    <div className="flex flex-col items-center justify-center mt-">
                        <h1 className="text-center  text-2xl text-black font-semibold">
                            Complete sus Datos
                        </h1>
                        <CheckoutForm onConfirm={createOrder}/>
                    </div>
                )
            }
        </div>
    );
}

export default Checkout;