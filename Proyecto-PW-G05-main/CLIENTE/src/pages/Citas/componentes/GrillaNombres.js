import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GrillaNombres.css';
import PersonaCita from './PersonaCita';

const GrillaNombres = ({ personaCitas }) => {
  // Agrupar las personas en filas de 4 tarjetas
  const filas = [];
  for (let i = 0; i < personaCitas.length; i += 4) {
    const fila = personaCitas.slice(i, i + 4);
    filas.push(fila);
  }

  return (
    <div className='persona-cita-container'>
      {filas.map((fila, index) => (
        <div key={index} className='fila-container'>
          {fila.map((personaCita, idx) => (
            <div key={idx} className='persona-cita-item'>
              <PersonaCita
                nombre={personaCita.nombreCompleto}
                universidad={personaCita.nombreUniversidad}
                carrera={personaCita.nombreCarrera}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GrillaNombres;
