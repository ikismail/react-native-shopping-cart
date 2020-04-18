import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "@ui-kitten/components";
import { ImageOverlay } from "../components/image-overlay";
import { EmailIcon } from "../components/icons";
import { KeyboardAvoidingView } from "../components/3rd-party";

const PasswordResetScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState();

  const onResetPasswordButtonPress = () => {
    navigation && navigation.goBack();
  };
  return (
    <KeyboardAvoidingView>
      <ImageOverlay
        style={styles.container}
        source={require("../../assets/image-background.jpg")}>
        <Text style={styles.forgotPasswordLabel} category='h4' status='control'>
          Forgot Password
        </Text>
        <Text style={styles.enterEmailLabel} status='control'>
          Please enter your email address
        </Text>
        <View style={styles.formContainer}>
          <Input
            status='control'
            placeholder='Email'
            icon={EmailIcon}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Button size='giant' onPress={onResetPasswordButtonPress}>
          RESET PASSWORD
        </Button>
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  formContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 24,
  },
  forgotPasswordLabel: {
    zIndex: 1,
    alignSelf: "center",
    marginTop: 100,
  },
  enterEmailLabel: {
    zIndex: 1,
    alignSelf: "center",
    marginTop: 100,
  },
});

export default PasswordResetScreen;
