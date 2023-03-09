import React, { useState } from "react";
import Axios from "../../../services/Axios";

export function FormEmpleadores() {

  const variables={
    
    curp:"",
    nombre:"",
    apellidos:"",
    sexo:"",
    telefono:""
  }

  const [empleadores, setEmpleadores] = useState(variables);

  const onChange=(e)=>{
    const {name,value}=e.target;
    setEmpleadores({...empleadores,[name]:value})
  }

  const GuardarDatos=async()=>{
    //const formulario=document.getElementById("personales");
    //const formData=new FormData(formulario);
    await Axios.post('/empleador',empleadores).then(()=>{
      console.log("Registros guardados")
    })
   console.log(empleadores);
  }

  const Enviar=(e)=>{
    e.preventDefault();
    GuardarDatos();
  }
  return (
    <div className="container-fluid p-3">
      <div class="card">
        <div class="card-header">Datos personales</div>
        <div class="card-body">
          <form class="row g-3 p-2" onSubmit={Enviar} id="personales">
            <div class="mb-3 row">
              <label for="curp" class="col-sm-2 col-form-label">
                Curp
              </label>
              <div class="col-sm-10">
                <input
                name="curp"
                  type="text"
                  class="form-control"
                  id="curp"
                  placeholder="Ingresa la matricula"
                  value={empleadores.curp}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="nombre" class="col-sm-2 col-form-label">
                Nombre
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  id="nombre"
                  placeholder="Ingresa tu nombre"
                  value={empleadores.nombre}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="apellidos" class="col-sm-2 col-form-label">
                Apellidos
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="apellidos"
                  id="apellidos"
                  placeholder="Ingresa los apellidos"
                  value={empleadores.apellidos}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="sexo" class="col-sm-2 col-form-label">
                Sexo
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="sexo"
                  id="sexo"
                  placeholder="Ingresa sexo"
                  value={empleadores.sexo}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="telefono" class="col-sm-2 col-form-label">
                Teléfono
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="telefono"
                  id="telefono"
                  placeholder="Ingresa tu numero de telefono"
                  value={empleadores.telefono}
                  onChange={onChange}
                />
              </div>
            </div>

            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}