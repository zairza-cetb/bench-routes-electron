<<<<<<< HEAD
<<<<<<< HEAD
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

export default class Notification extends React.Component {
  componentDidMount() {
    if (global.showNotificationScreen) {
      document.getElementById('notification').style.width = '40%';
      document.getElementById('notification').style.display = 'block';
    }
  }

  updateShowNotificationsScreen = () => {
    global.showNotificationSection = !global.showNotificationSection;
=======
import React from 'react';

export default class Notification extends React.Component {

  updateShowNotificationsScreen = () => {
    console.log('updating');
    global.showNotificationSection = !global.showNotificationSection;
    console.log(global.showNotificationSection)
>>>>>>> notifications with animations
    if (global.showNotificationSection) {
      document.getElementById('notification').style.width = '40%';
    } else {
      document.getElementById('notification').style.width = '0%';
    }
<<<<<<< HEAD
  };
=======
  }

  componentDidMount() {
    console.log('called')
    if (global.showNotificationScreen) {
      document.getElementById('notification').style.width = '40%';
      document.getElementById('notification').style.display = 'block';
    }
  }
>>>>>>> notifications with animations

  render() {
    return (
      <div>
<<<<<<< HEAD
        <div
          className="notification-icon"
          style={{
            cursor: 'pointer',
          }}
        >
          <img
            src="assets/icons/notify-icon.svg"
            alt="notification"
            onClick={() => this.updateShowNotificationsScreen()}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                this.updateShowNotificationsScreen();
              }
            }}
          />
        </div>
        <div id="notification" className="notification-screen">
          <div
            style={{
              display: 'inline-flex',
              padding: '1% 0% 3% 2%',
              borderBottom: '1px solid #fff',
              width: '100%',
              cursor: 'pointer',
            }}
          >
            <img
              src="assets/icons/cross.svg"
              alt="collapse notifications"
              onClick={() => this.updateShowNotificationsScreen()}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  this.updateShowNotificationsScreen();
                }
              }}
            />
            <div>Notifications</div>
          </div>
          <div className="notification-messages">this is notification screen</div>
=======
        <div className='notification-icon'>
          <img src='assets/icons/notify-icon.svg' alt='notification' onClick={() => this.updateShowNotificationsScreen()} />
        </div>
        <div id='notification' className='notification-screen'>
          <div style={{ display: 'inline-flex', padding: `1% 0% 3% 2%`, borderBottom: '1px solid #fff', width: '100%' }}>
            <img src='assets/icons/cross.svg' alt='collapse notifications' onClick={() => this.updateShowNotificationsScreen()} />
            <div>
              Notifications
            </div>
          </div>
          <div className='notification-messages'>
            this is notification screen
=======
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";

export default class Notification extends React.Component {
  render() {
    return (
      <div
        className={`notification ${
          this.props.showNotification ? "display-notification" : ""
        }`}
      >
        <div className="notification-content">
          <div className="notification-header">
            <div>Notifications</div>
            <img
              src="assets/icons/cross.svg"
              alt="collapse notifications"
              onClick={() => this.props.updateShowNotificationsScreen()}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  return this.props.updateShowNotificationsScreen;
                }
              }}
            />
>>>>>>> Eslint integration with airbnb extension (#12)
          </div>
>>>>>>> notifications with animations
        </div>
        <div className="notification-body">this is notification screen</div>
      </div>
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> notifications with animations
=======
}
>>>>>>> Eslint integration with airbnb extension (#12)
