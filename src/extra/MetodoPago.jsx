import React from 'react';

function MetodoPago({ metodoPago, setMetodoPago, procesarPago, cancelarTransaccion }) {
  return (
    <div>
      <hr/>
      <h2 className='h2Carrito'>Seleccione el método de pago:</h2>
      <select className ="select"value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)}>
        <option className ="metodoPago" value="Efectivo">Efectivo</option>
        <option className ="metodoPago"value="Paypal">Paypal</option>
        <option className ="metodoPago" value="Tarjeta">Tarjeta de crédito/débito</option>
      </select><br/><br/>
      <button onClick={cancelarTransaccion}>Cancelar</button>
      <button onClick={procesarPago}>Pagar</button><br/><br/>
    </div>
  );
}

export default MetodoPago;
