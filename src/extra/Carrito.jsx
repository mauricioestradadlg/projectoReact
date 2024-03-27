import React, { useState } from 'react';
import MetodoPago from './MetodoPago';

function Carrito({ productosEnCarrito, setProductosEnCarrito }) {
  const [mostrarMetodoPago, setMostrarMetodoPago] = useState(false);
  const [metodoPago, setMetodoPago] = useState('');

  // Calcula el total de la cuenta
  const totalCuenta = productosEnCarrito.reduce((total, producto) => total + producto.precio, 0);

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setProductosEnCarrito([]);
  };

  // Función para procesar el pago
  const procesarPago = () => {
    // Aquí puedes implementar la lógica para procesar el pago según el método seleccionado
    window.alert(`Pago realizado por ${metodoPago}.`);
  };

  // Función para cancelar la transacción
  const cancelarTransaccion = () => {
    setMostrarMetodoPago(false);
    setMetodoPago('');
  };

  return (
    <div className="carrito">
      <hr/>
      <h2 className='h2Carrito'>Carrito de compras:</h2>
      <ul className='ulCarrito'>
        {productosEnCarrito.map((producto, index) => (
          <li key={index}>{producto.nombre} - ${producto.precio}</li>
        ))}
      </ul><br/>
      <p className='ulCarrito'>Total: ${totalCuenta.toFixed(2)}</p> {/* Muestra el total de la cuenta */}
      <button className='botonesCarrito' onClick={vaciarCarrito}>Vaciar Carrito</button>
      <button className='botonesCarrito' onClick={() => setMostrarMetodoPago(true)}>Comprar Articulos</button><br/><br/><br/>

      {/* Sección de selección de método de pago */}
      {mostrarMetodoPago && (
        <MetodoPago 
          metodoPago={metodoPago} 
          setMetodoPago={setMetodoPago} 
          procesarPago={procesarPago} 
          cancelarTransaccion={cancelarTransaccion} 
        />
      )}
    </div>
  );
}

export default Carrito;
