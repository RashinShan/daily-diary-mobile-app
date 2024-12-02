import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DiaryHome = () => {
  const [diaryDetails, setDiaryDetails] = useState('');
  const [diaryList, setDiaryList] = useState([]);

  const addDiaryDetail = () => {
    if (diaryDetails.trim()) {
      setDiaryList((prevList) => [
        ...prevList,
        { id: Date.now().toString(), detail: diaryDetails },
      ]);
      setDiaryDetails(''); // Clear input field
    }
  };

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
      <TouchableOpacity style={styles.addButton} onPress={addDiaryDetail}>
        <Text style={styles.addButtonText}>Add Diary</Text>
      </TouchableOpacity>
      <FlatList
        data={diaryList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.diaryItem}>
            <Text style={styles.diaryText}>{item.detail}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No diary entries yet.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
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
});

export default DiaryHome;
