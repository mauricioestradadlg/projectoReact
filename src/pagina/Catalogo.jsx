// Catalogo.jsx
import React, { useState } from 'react';
import Productos from '../extra/Productos.jsx';
import Carrito from '../extra/Carrito.jsx';

function Catalogo(){

    const [productosEnCarrito, setProductosEnCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        window.alert("Agregaste un producto al carrito!");
        setProductosEnCarrito([...productosEnCarrito, producto]);
    };

    return (
        <>
        <main>
            <h1 id = "h1Inicio" className='h1Catalogo'>Catalogo</h1>
            <h4 id = "h4Inicio" className='h4Catalogo'>Aqui estan nuestros productos, elige el que mas te gusta😉</h4><br/><br/>
            <img className='imgCatalogo' src = './imagenes/mercancia.jpg'/><br/><br/><br/><br/><br/>

            <Productos nombre ="Producto 1" precio = {999.5} id = {1000} imagen ="./imagenes/reactLogo.png" agregarAlCarrito={agregarAlCarrito}/>
            <Productos nombre ="Producto 2" precio = {1999.5} id = {1001} imagen ="./imagenes/reactLogo.png" agregarAlCarrito={agregarAlCarrito}/>
            <Productos nombre ="Producto 3" precio = {2999.99} id = {1002} imagen ="./imagenes/reactLogo.png" agregarAlCarrito={agregarAlCarrito}/>
            <Productos nombre ="Producto 4" precio = {4000} id = {1003} imagen ="./imagenes/reactLogo.png" agregarAlCarrito={agregarAlCarrito}/>
            <Productos nombre ="Producto 5" precio = {10450} id = {1004} imagen ="./imagenes/reactLogo.png" agregarAlCarrito={agregarAlCarrito}/>
        </main>

        {productosEnCarrito.length > 0 && <Carrito productosEnCarrito={productosEnCarrito} setProductosEnCarrito={setProductosEnCarrito} />}
        </>
    );

}

export default Catalogo;

