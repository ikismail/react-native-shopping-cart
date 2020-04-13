import React from 'react';
import {Layout, Button} from '@ui-kitten/components';

const HomeScreen = ({navigation}) => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={() => navigation.navigate('Main')} title="Home Page">
        HOME
      </Button>
    </Layout>
  );
};

export default HomeScreen;
