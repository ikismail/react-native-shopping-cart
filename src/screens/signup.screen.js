import React from "react";
import { View } from "react-native";
import {
  Button,
  CheckBox,
  Datepicker,
  Divider,
  Input,
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import { ImageOverlay } from "../components/image-overlay";
import {
  FacebookIcon,
  GoogleIcon,
  StarIcon,
  HeartIconFill,
  TwitterIcon,
  ArrowForwardIcon,
} from "../components/icons";
import { KeyboardAvoidingView } from "../components/3rd-party";

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [dob, setDob] = React.useState();
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = () => {
    navigation && navigation.goBack();
  };

  const onSignInButtonPress = () => {
    navigation && navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageOverlay
        style={styles.headerContainer}
        source={require("../../assets/image-background.jpg")}>
        <Button
          style={styles.evaButton}
          appearance='ghost'
          status='control'
          size='large'
          accessoryLeft={HeartIconFill}>
          ikismail
        </Button>
        <View style={styles.signUpContainer}>
          <Text style={styles.signInLabel} category='h4' status='control'>
            SIGN UP
          </Text>
          <Button
            style={styles.signInButton}
            appearance='ghost'
            status='control'
            size='giant'
            accessoryLeft={ArrowForwardIcon}
            onPress={onSignInButtonPress}>
            Sign In
          </Button>
        </View>
      </ImageOverlay>
      <View style={styles.socialAuthContainer}>
        <Text style={styles.socialAuthHintText}>
          Sign with a social account
        </Text>
        <View style={styles.socialAuthButtonsContainer}>
          <Button
            appearance='ghost'
            size='giant'
            status='basic'
            accessoryLeft={GoogleIcon}
          />
          <Button
            appearance='ghost'
            size='giant'
            status='basic'
            accessoryLeft={FacebookIcon}
          />
          <Button
            appearance='ghost'
            size='giant'
            status='basic'
            accessoryLeft={TwitterIcon}
          />
        </View>
      </View>
      <View style={styles.orContainer}>
        <Divider style={styles.divider} />
        <Text style={styles.orLabel} category='h5'>
          OR
        </Text>
        <Divider style={styles.divider} />
      </View>
      <Text style={styles.emailSignLabel}>Sign up with Email</Text>
      <View style={[styles.container, styles.formContainer]}>
        <Input
          placeholder='Ally'
          label='FIRST NAME'
          autoCapitalize='words'
          value={firstName}
          onChangeText={setFirstName}
        />
        <Input
          style={styles.formInput}
          placeholder='Watsan'
          label='LAST NAME'
          autoCapitalize='words'
          value={lastName}
          onChangeText={setLastName}
        />
        <Datepicker
          style={styles.formInput}
          placeholder='18/10/1995'
          label='Date of Birth'
          date={dob}
          onSelect={setDob}
        />
        <Input
          style={styles.formInput}
          placeholder='ally.watsan@gmail.com'
          label='EMAIL'
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.formInput}
          label='PASSWORD'
          placeholder='Password'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <CheckBox
          style={styles.termsCheckBox}
          // textStyle={}
          checked={termsAccepted}
          onChange={(checked) => setTermsAccepted(checked)}>
          <Text style={styles.termsCheckBoxText}>
            {
              "By creating an account, I agree to the Ewa Terms of \n Use and Privacy Policy"
            }
          </Text>
        </CheckBox>
      </View>
      <Button
        style={styles.signUpButton}
        size='large'
        onPress={onSignUpButtonPress}>
        SIGN UP
      </Button>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-1",
  },
  headerContainer: {
    minHeight: 216,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 44,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },
  socialAuthContainer: {
    marginTop: 24,
  },
  socialAuthButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialAuthHintText: {
    alignSelf: "center",
    marginBottom: 16,
  },
  formContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  evaButton: {
    maxWidth: 150,
    marginTop: 50,
    paddingHorizontal: 10,
  },
  signInLabel: {
    flex: 1,
  },
  signInButton: {
    flexDirection: "row-reverse",
    paddingHorizontal: 0,
  },
  signUpButton: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  socialAuthIcon: {
    tintColor: "text-basic-color",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 24,
  },
  divider: {
    flex: 1,
  },
  orLabel: {
    marginHorizontal: 8,
  },
  emailSignLabel: {
    alignSelf: "center",
    marginTop: 8,
  },
  formInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 20,
  },
  termsCheckBoxText: {
    fontSize: 12,
    lineHeight: 14,
    color: "text-hint-color",
  },
});

export default SignupScreen;
