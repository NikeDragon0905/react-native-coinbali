import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastAndroid } from 'react-native';

const Notification = () => {
  const message = useSelector(state => state.notification.message);

  useEffect(() => {
    if (message) {
      ToastAndroid.show(message, ToastAndroid.LONG);
    } 
  }, [message]);

  return <></>;
};

export default Notification;