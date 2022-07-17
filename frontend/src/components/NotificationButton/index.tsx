import React from 'react'
import './styles.css'
import icon from '../../assets/img/notification-icon.svg'
import axios from 'axios';
import { BASE_URL } from '../../utils/request';

type Props = {
  saleId: number;
}


const NotificationButton = ( {saleId} : Props ) => {

  const handleClick = (id:number) => {
    axios(`${BASE_URL}/sales/${id}/notification`)
  }


    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
          <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton