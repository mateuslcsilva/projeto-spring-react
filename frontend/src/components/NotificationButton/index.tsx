import React from 'react'
import './styles.css'
import icon from '../../assets/img/notification-icon.svg'


const NotificationButton = () => {
    return (
        <div className="dsmeta-red-btn-container">
        <div className="dsmeta-red-btn">
          <img src={icon} alt="Notificar" />
        </div>
      </div>
    )
}

export default NotificationButton