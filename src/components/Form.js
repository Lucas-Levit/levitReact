import { useState } from 'react'
import { useCartContext } from '../context/cartcontext'
import { getFirestore, collection, addDoc } from "firebase/firestore";



const Form = () => {
    const { carrito, totalFinal, vaciarCarrito, id, setId } = useCartContext()

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
        if (dataForm.name !== '' && dataForm.phone !== '' && dataForm.email !== '' && dataForm.remail !== '') {
            if (dataForm.email === dataForm.remail) {
                const orden = {}
                orden.items = carrito.map(prod => {
                    const { id, name: title, price } = prod
                    return { id, title, price }
                })
                orden.comprador = { name: dataForm.name, phone: dataForm.phone, email: dataForm.email }
                orden.total = totalFinal()
                const db = getFirestore()
                const orders = collection(db, 'orders')
                addDoc(orders, orden)
                    .then(resp => setId([...id, { id: resp.id }]))
                    .catch(err => console.log(err))
                    .finally(() => vaciarCarrito())
            } else {
                const coincidir = document.getElementById("coincidir")
                coincidir.classList.remove("visually-hidden")
            }
        }
    }

    return (
        <>
            <form
                onSubmit={finalizarCompra}
                className='formulario'>
                <input className={'input'}
                    required
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={dataForm.name}
                    onChange={handleInputChange}
                />
                <input className={'input'}
                    required
                    type="number"
                    name="phone"
                    value={dataForm.phone}
                    placeholder="Teléfono"
                    onChange={handleInputChange}
                />
                <input className={'input'}
                    required
                    id='mail'
                    type="text"
                    name="email"
                    value={dataForm.email}
                    placeholder="Email"
                    onChange={handleInputChange}
                />
                <input className={'input'}
                    required
                    id='remail'
                    type="text"
                    name="remail"
                    value={dataForm.remail}
                    placeholder="Confirmar Email"
                    onChange={handleInputChange}
                />
                <button variant='success' type="submit" className='btn btn-primary mt-1 mx-0' >Finalizar Compra</button>
                <p className='visually-hidden' id='coincidir'> *Los campos del mail tienen que coincidir </p>
            </form>
        </>
    )
}

export default Form