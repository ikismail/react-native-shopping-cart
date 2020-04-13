import React from 'react';
import {Layout, Button} from '@ui-kitten/components';

const NotificationScreen = ({navigation}) => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Notification Page">
        NOTIFICATION
      </Button>
    </Layout>
  );
};

export default NotificationScreen;
