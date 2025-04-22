import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleReset = () => {
    // In real app: call backend to send reset link
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password 🔑</Text>
      <Text style={styles.subtitle}>
        Enter the email linked to your account and we’ll send reset instructions.
      </Text>

      {submitted ? (
        <Text style={styles.success}>Reset link sent! Check your email 📬</Text>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email address"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <Text style={styles.buttonText}>Send Instructions</Text>
          </TouchableOpacity>
        </>
      )}

      <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        ← Back to Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F1F8E9', padding: 24, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2E7D32', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 24 },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    borderColor: '#BDBDBD',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  success: { fontSize: 16, color: '#2E7D32', marginVertical: 20 },
  link: { marginTop: 30, color: '#388E3C', fontWeight: 'bold', textAlign: 'center' },
});
