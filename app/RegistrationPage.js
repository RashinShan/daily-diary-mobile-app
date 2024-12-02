import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Footer from "../components/Footer";

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

   //to state the form status and find the error
    const[errors,setErrors]=useState({});
    const[formstatus,setFormstatus]=useState(false); //boolean type : the form valid true not valid false

    //for the fetching facilities
    useEffect(()=>{
        formValidation()
    },[name,email,password])

    const formValidation=()=>{
        let errorobject={

        }

        if(!name){
            errorobject.name="Name is required"
        }
        if(!email){
            errorobject.email="Email is required"
        }
        //check the email in the correct form or not?
        else if(!/\S+@\S+\.\S+/.test(email)){
            errorobject.email="Email is invalid"
        }
        if(!password){
            errorobject.password="Password is required"
        }
        else if(password.length<6){
            errorobject.password="Password must be at least 6"
        }
        else if(password!==cpassword)
        {
            errorobject.cpassword="Password not match"
        }

        //set 

        setErrors(errorobject);
        //number of 
        setFormstatus(Object.keys(errorobject).length===0);
    }

  //check status of the form

    const handlingFormsubmission=()=>{
        if(formstatus)
        {
            alert('Form registration is successfully !')
        }
        else{
            alert('Error occurred fix it !')
        }
    }


  return (
   
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      
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
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

       <TextInput
        style={styles.input}
        placeholder="Confirm password"
        value={cpassword}
        onChangeText={setCPassword}
        secureTextEntry
      />
    <TouchableOpacity style={[styles.button,{opacity:formstatus ? 1 : 0.5}]} disabled={!formstatus} onPress={{handlingFormsubmission}}>
     <Text style={styles.buttonText}>
            Register
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
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
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

export default RegistrationPage;
