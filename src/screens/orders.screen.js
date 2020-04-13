import React from 'react';
import {Layout, Button} from '@ui-kitten/components';

const OrdersScreen = ({navigation}) => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={() => navigation.navigate('Orders')} title="Orders Page">
        Orders
      </Button>
    </Layout>
  );
};

export default OrdersScreen;
