import React from 'react';
import {Layout, Button} from '@ui-kitten/components';

const NewsScreen = ({navigation}) => {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={() => navigation.navigate('News')} title="News Page">
        News
      </Button>
    </Layout>
  );
};

export default NewsScreen;
