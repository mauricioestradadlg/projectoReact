// Productos.jsx
import React from 'react';
import PropTypes from 'prop-types';

function Productos(props){

    return(
    <>
    <div className='productos'>
        <img src={props.imagen} /> 
        <p className='productoCatalogo'>Nombre: {props.nombre}</p>
        <p className='productoCatalogo'>Precio: $ {props.precio} MXN</p>
        <p className='productoCatalogo'>ID: {props.id}</p>
        <button onClick={() => props.agregarAlCarrito({ nombre: props.nombre, precio: props.precio, id: props.id, imagen: props.imagen })}>Agregar al carrito</button>
    </div><br/><br/>
    </>);

}

Productos.propTypes ={
    nombre: PropTypes.string,
    precio: PropTypes.number,
    id: PropTypes.number,
    imagen: PropTypes.string,
    agregarAlCarrito: PropTypes.func.isRequired, // Prop para agregar al carrito
}

export default Productos;
