import { useState } from 'react'
import { useCartContext } from '../context/cartcontext'
import { getFirestore, collection, addDoc } from "firebase/firestore";



const Form = () => {
    const { carrito, totalFinal, vaciarCarrito } = useCartContext()
    const [id, setId] = useState([])
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',
        remail: ''
    })

    const handleInputChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        // Aca Codigo para generar orden
        const orden = {}
        orden.items = carrito.map(prod => {
            const { id, name: title, price } = prod
            return { id, title, price }
        })
        orden.comprador = { name: dataForm.name, phone: dataForm.phone, email: dataForm.email }
        orden.total = totalFinal()
        console.log(orden);
        const db = getFirestore()
        const orders = collection(db, 'orders')
        addDoc(orders, orden) // setDoc(orders, obj, id)
            .then(resp => setId({ id: resp.id }))
            .then(console.log(id))
            .catch(err => console.log(err))
            .finally(() => vaciarCarrito())
    }


    const lastOrder = [...id].pop()
    return (
        <>
            <form
                onSubmit={finalizarCompra}
                className='formulario'>
                <input className={'input'}
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={dataForm.name}
                    onChange={handleInputChange}
                />
                <input className={'input'}
                    type="number"
                    name="phone"
                    value={dataForm.phone}
                    placeholder="Teléfono"
                    onChange={handleInputChange}
                />
                <input className={'input'}
                    type="text"
                    name="email"
                    value={dataForm.email}
                    placeholder="Email"
                    onChange={handleInputChange}
                />
                <input className={'input'}
                    type="text"
                    name="remail"
                    value={dataForm.remail}
                    placeholder="Confirmar Email"
                    onChange={handleInputChange}
                />
                <button variant='success' type="submit">Finalizar Compra</button>
            </form>

            {lastOrder}
        </>
    )
}

export default Form