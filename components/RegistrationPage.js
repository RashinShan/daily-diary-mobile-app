import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Header from "../components/Header";
import Footer from "../components/Footer";

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(false);

  useEffect(() => {
    formValidation();
  }, [name, email, password, cpassword]);

  const formValidation = () => {
    let errorObject = {};

    if (!name) {
      errorObject.name = "Name is required";
    }
    if (!email) {
      errorObject.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errorObject.email = "Email is invalid";
    }
    if (!password) {
      errorObject.password = "Password is required";
    } else if (password.length < 6) {
      errorObject.password = "Password must be at least 6 characters";
    } else if (password !== cpassword) {
      errorObject.cpassword = "Password does not match";
    }

    setErrors(errorObject);
    setFormStatus(Object.keys(errorObject).length === 0);
  };

  // Sending form data to backend
  const handlingFormSubmission = async () => {
    if (formStatus) {
      try {
        // Replace with your actual backend endpoint
        const response = await fetch('http://127.0.0.1:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();
        
        if (response.ok) {
          alert('Form registration is successful!');
        } else {
          alert(`Registration failed: ${data.message}`);
        }
      } catch (error) {
        alert('Error occurred while sending the data!');
      }
    } else {
      alert('Error occurred, please fix the issues!');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        value={cpassword}
        onChangeText={setCPassword}
        secureTextEntry
      />
      {errors.cpassword && <Text style={styles.errorText}>{errors.cpassword}</Text>}

      <TouchableOpacity
        style={[styles.button, { opacity: formStatus ? 1 : 0.5 }]}
        disabled={!formStatus}
        onPress={handlingFormSubmission}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#f9f9f9',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default RegistrationPage;

