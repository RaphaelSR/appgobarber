import React from "react";
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Input from "../../components/Input";
import Button from "../../components/Button";
import LogoImg from "../../assets/logo.png";
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from "./styles";

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.os === "ios" ? "padding" : undefined}
        enabled
      >
      <ScrollView>
        <Container>
          <Image source={LogoImg} />
          <View>
            <Title>Faça seu logon</Title>
          </View>

          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button
            onPress={() => {
              console.log("OK");
            }}
          >
            Entrar
          </Button>

          <ForgotPassword onPress={() => {}}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => {}}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};
export default SignIn;
