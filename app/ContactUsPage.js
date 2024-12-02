import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';
import Header from "../components/Header";
import Footer from "../components/Footer";
const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //to state the form status and find the error
    const[errors,setErrors]=useState({});
    const[formstatus,setFormstatus]=useState(false); //boolean type : the form valid true not valid false

  const handlingFormsubmission = () => {
    // Handle form submission (e.g., call an API or send email)
    console.log({ name, email, message });

  };  

  return (
    <View style={styles.container}>
       <Header />
      <Text style={styles.title}>Contact Us</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.textarea}
        placeholder="Your message"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />

        <TouchableOpacity style={[styles.button,{opacity:formstatus ? 1 : 0.5}]} disabled={!formstatus} onPress={{handlingFormsubmission}}>
     <Text style={styles.buttonText}>
            Send Message
        </Text>
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
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 10,
    fontWeight:'bold',
    fontSize:16,
    backgroundColor:'#9996'
  },
  textarea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    paddingTop: 10,
    fontSize:16,
    fontWeight:'bold',
    backgroundColor:'#9996'
  },
  
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding:15,
    borderRadius: 5,
    justifyContent:'center',
    
    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:18,
    
    
  },
});

export default ContactPage;
