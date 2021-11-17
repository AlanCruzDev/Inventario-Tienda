import React, { useState } from "react";
import "./tools.css";
import { FaBurn } from "react-icons/fa";
import { CompactPicker } from "react-color";
import {useDispatch,useSelector} from 'react-redux';
import {NuevoColor} from '../../../Action/color.action';

export const Tools = () => {

  const {dateUser} = useSelector((state)=> state.auth);
  const {idUsuario} =dateUser[0].results[0];
  const dispatch=useDispatch();
  const color = "white";
  const [getcolor, setcolor] = useState({color1:'',color2:''});
  const GuardarCambios=()=>dispatch(NuevoColor(getcolor,idUsuario));

  
  return (
    <div className="tools" style={{ backgroundColor: color }}>
      <div className="tools__title">
        <h1>Personaliza</h1>
      </div>
      <div className="tools_menu">
        <div className="tools__link">
          <h2>
            <i>
              <FaBurn />
            </i>
            Color Barra Lateral
          </h2>
          <div className="text-center">
            <CompactPicker 
              color={getcolor}
              onChangeComplete={(color) => {setcolor({...getcolor,color1:color.hex})}}            
            />
          </div>
        </div>
        <div className="tools__link">
          <h2>
            <i>
              <FaBurn />
            </i>
            Color Fuente
          </h2>
          <div className="text-center">
            <CompactPicker 
              color={getcolor}
              onChangeComplete={(color) => {setcolor({...getcolor,color2:color.hex})}}            
            />
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-info w-50" onClick={()=>{GuardarCambios()}}>Guardar</button>
        </div>
      </div>
    </div>
  );
};
