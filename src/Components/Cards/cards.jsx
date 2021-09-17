import React from "react";
import './cards.css';
import {Link} from 'react-router-dom';

export const Cards = ({icono,titulo,subtitulo,path}) => {
  return (
      <div className="cards">
        <i>{icono}</i>
        <div className="card_inner">
          <p className="text-primary-o">{titulo} <Link to={path}>Ver</Link></p>
          <span className="font-bold text-title">{subtitulo}</span>
        </div>
      </div>
  );
};
 