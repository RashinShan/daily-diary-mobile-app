import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Modal, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DiaryHome = () => {
  const [user, setUser] = useState('')
  const [diaryDetails, setDiaryDetails] = useState('');
  const [diaryList, setDiaryList] = useState([]);
  const [editMode, setEditMode] = useState(false); 
  const [editId, setEditId] = useState(null); 
  const [modalVisible, setModalVisible] = useState(false); 
  


  const fetchEmail = async () => {
    try {
      const email = await AsyncStorage.getItem("userEmail");
      setUser(email)
    } catch (error) {
      console.error("Error fetching email:", error);
    }
  };



  const fetchDiaryList = async () => {
    try {
      const email = await AsyncStorage.getItem("userEmail");
      const response = await axios.get(`http://127.0.0.1:5000/diary/${email}`);
      setDiaryList(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('Error', 'Failed to fetch diary entries.');
    }
  };

  const addDiaryDetail = async () => {
    const email = await AsyncStorage.getItem("userEmail");
    if (diaryDetails.trim()) {
      try {
        const response = await axios.post('http://127.0.0.1:5000/diary', { 
          notes: diaryDetails,
          user:email
        });

        setDiaryList((prevList) => [
          ...prevList,
          { id: Date.now().toString(), notes: diaryDetails },
        ]);

        setDiaryDetails(''); 
        fetchDiaryList();
        Alert.alert('Success', response.data.message);
      } catch (error) {
        console.error('Error sending data:', error);
        Alert.alert('Error', 'Failed to add diary entry.');
      }
    } else {
      Alert.alert('Error', 'Please enter some text.');
    }
  };

  const deleteDiaryDetail = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/diary/${id}`);
      
      setDiaryList((prevList) => prevList.filter((item) => item.id !== id));
      
      Alert.alert('Success', 'Diary entry deleted successfully.');
    } catch (error) {
      console.error('Error deleting data:', error);
      Alert.alert('Error', 'Failed to delete diary entry.');
    }
  };

  const editDiaryDetail = async () => {
    if (diaryDetails.trim()) {
      try {
        const response = await axios.put(`http://127.0.0.1:5000/diary/${editId}`, { 
          notes: diaryDetails 
        });

        setDiaryList((prevList) =>
          prevList.map((item) =>
            item.id === editId ? { ...item, notes: diaryDetails } : item
          )
        );

        setDiaryDetails(''); 
        setModalVisible(false); 
        setEditId(null); 
        Alert.alert('Success', 'Diary entry updated successfully.');
      } catch (error) {
        console.error('Error updating data:', error);
        Alert.alert('Error', 'Failed to update diary entry.');
      }
    } else {
      Alert.alert('Error', 'Please enter some text.');
    }
  };

  useEffect(() => {
    fetchDiaryList();
    fetchEmail();
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>Diary App</Text>
      <TextInput
        style={styles.input}
        placeholder="text..."
        value={diaryDetails}
        onChangeText={setDiaryDetails}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={editMode ? editDiaryDetail : addDiaryDetail}
      >
        <Text style={styles.addButtonText}>
          {editMode ? "Update Diary" : "Add Diary"}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={diaryList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.diaryItem}>
            <Text style={styles.diaryText}>{item.notes}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => {
                  setDiaryDetails(item.notes); 
                  setModalVisible(true);
                  setEditId(item.id);
                }}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteDiaryDetail(item.id)}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No diary entries yet.</Text>
        }
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.input}
              placeholder="Edit your diary entry"
              value={diaryDetails}
              onChangeText={setDiaryDetails}
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={editDiaryDetail}
            >
              <Text style={styles.addButtonText}>Update Diary</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.addButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent:'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: 'rgba(0, 123, 255, 1.00);',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  diaryItem: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  diaryText: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#2196F3',
    padding: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '62%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
});

export default DiaryHome;
