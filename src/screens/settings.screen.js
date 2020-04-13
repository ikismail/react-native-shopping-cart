import React from 'react';
import {Layout, Button} from '@ui-kitten/components';

const SettingsScreen = ({navigation}) => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={() => navigation.navigate('Main')} title="Settings Page">
        SETTINGS
      </Button>
    </Layout>
  );
};

export default SettingsScreen;
