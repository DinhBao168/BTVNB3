import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const Index2 = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const handleRegister = () => {
    // Kiểm tra nếu các trường trống
    if (!name.trim()) {
    alert('Vui lòng nhập tên')
      return;
    }
    if (!email.trim()) {
      alert('Vui lòng nhập email')
      return;
    }
    if (!password.trim()) {
     alert('VUi lòng nhập mật khẩu')
      return;
    }else{
 alert(`Đăng kí thành công:\n ${name}\n ${email}`)
    }

    
 
  };

  const cancel = ()=>{
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Ký</Text>

      {/* Ô input cho tên */}
      <TextInput
        style={styles.input}
        placeholder="Nhập tên"
        value={name}
        onChangeText={setName}
      />

      {/* Ô input cho email */}
      <TextInput
        style={styles.input}
        placeholder="Nhập email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Ô input cho mật khẩu */}
      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Nút đăng ký */}
      <View style={styles.button}>
        <Button title="Đăng ký" onPress={handleRegister} />
      </View>

      <View style={styles.button2}>
        <Button title="Xóa" onPress={cancel} />
      </View>
      
    </View>
  );
};

export default Index2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#003399",
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button:{
    backgroundColor: '#CC99FF',
    margin: 20,
  },
  button2:{
    backgroundColor: 'FF00000'
  }
});
