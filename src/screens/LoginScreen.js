import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Alert,
  ActivityIndicator,
  ScrollView
} from 'react-native';

// Banco de dados simulado em memória (substituir por AsyncStorage depois)
let usersDatabase = [
  { email: 'usuario@email.com', password: '123456', name: 'Usuário Teste' },
  { email: 'melania@email.com', password: 'f12024', name: 'Melânia' },
  { email: 'admin@f1.com', password: 'admin123', name: 'Admin F1' }
];

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [currentUser, setCurrentUser] = useState(null);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const checkUserExists = (email) => {
    return usersDatabase.some(user => user.email.toLowerCase() === email.toLowerCase());
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const user = usersDatabase.find(user => 
        user.email.toLowerCase() === email.toLowerCase() && 
        user.password === password
      );
      
      if (user) {
        setCurrentUser(user);
        Alert.alert('Sucesso!', `Bem-vindo de volta, ${user.name}!`);
        // CORREÇÃO AQUI: Navegar para 'Main' em vez de 'Home'
        navigation.navigate('Main');
      } else {
        Alert.alert('Erro', 'E-mail ou senha incorretos');
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleCreateAccount = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      return;
    }

    setIsLoading(true);

    // Salva os dados primeiro
    const newUser = { 
      email: email.toLowerCase(), 
      password: password, 
      name: email.split('@')[0] 
    };

    setTimeout(() => {
      // DEPOIS verifica se a conta existe
      if (checkUserExists(email)) {
        Alert.alert(
          'Conta Já Existe', 
          'Este e-mail já está cadastrado. Deseja fazer login?',
          [
            {
              text: 'Cancelar',
              style: 'cancel'
            },
            {
              text: 'Fazer Login',
              onPress: () => {
                setIsLogin(true);
                setConfirmPassword('');
              }
            }
          ]
        );
      } else {
        // Adiciona o novo usuário ao banco de dados
        usersDatabase.push(newUser);
        setCurrentUser(newUser);
        Alert.alert(
          'Conta Criada!', 
          `Sua conta foi criada com sucesso! Bem-vindo(a), ${newUser.name}!`,
          [
            {
              text: 'OK',
              // CORREÇÃO AQUI: Navegar para 'Main' em vez de 'Home'
              onPress: () => navigation.navigate('Main')
            }
          ]
        );
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleGuestLogin = () => {
    // CORREÇÃO AQUI: Navegar para 'Main' em vez de 'Home'
    navigation.navigate('Main');
  };

  const switchToCreateAccount = () => {
    setIsLogin(false);
    setPassword('');
    setConfirmPassword('');
  };

  const switchToLogin = () => {
    setIsLogin(true);
    setConfirmPassword('');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          
          {/* Header com Logo */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>F1</Text>
              <View style={styles.logoCircle} />
            </View>
            <Text style={styles.title}>
              {isLogin ? 'Bem-vindo de Volta' : 'Criar Nova Conta'}
            </Text>
            <Text style={styles.subtitle}>
              {isLogin ? 'Entre na sua conta F1' : 'Junte-se à comunidade F1'}
            </Text>
          </View>

          {/* Formulário */}
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="seu@email.com"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Sua senha"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoComplete="password"
              />
            </View>

            {!isLogin && (
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Confirmar Senha</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite a senha novamente"
                  placeholderTextColor="#999"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                />
              </View>
            )}

            {isLogin && (
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
              </TouchableOpacity>
            )}

            {/* Botão Principal */}
            <TouchableOpacity 
              style={[
                styles.primaryButton,
                isLoading && styles.buttonDisabled
              ]} 
              onPress={isLogin ? handleLogin : handleCreateAccount}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.primaryButtonText}>
                  {isLogin ? 'Entrar' : 'Criar Conta'}
                </Text>
              )}
            </TouchableOpacity>

            {/* Botão Secundário */}
            {!isLogin ? (
              <TouchableOpacity 
                style={styles.secondaryButton} 
                onPress={switchToLogin}
              >
                <Text style={styles.secondaryButtonText}>Já tenho uma conta</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity 
                style={styles.secondaryButton} 
                onPress={switchToCreateAccount}
              >
                <Text style={styles.secondaryButtonText}>Criar nova conta</Text>
              </TouchableOpacity>
            )}

            {/* Divisor */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>ou</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Botão Visitante */}
            <TouchableOpacity 
              style={styles.guestButton} 
              onPress={handleGuestLogin}
            >
              <Text style={styles.guestButtonText}>Continuar como Visitante</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Ao continuar, você concorda com nossos{'\n'}
              <Text style={styles.footerLink}>Termos de Uso</Text> e <Text style={styles.footerLink}>Política de Privacidade</Text>
            </Text>
          </View>

        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
  },
  logoContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#e10600',
    zIndex: 2,
  },
  logoCircle: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(225, 6, 0, 0.1)',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  formContainer: {
    marginTop: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: 'white',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#e10600',
    fontSize: 14,
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: '#e10600',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#e10600',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#333',
  },
  dividerText: {
    color: '#666',
    paddingHorizontal: 16,
    fontSize: 14,
  },
  guestButton: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  guestButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 16,
  },
  footerLink: {
    color: '#e10600',
    textDecorationLine: 'underline',
  },
});