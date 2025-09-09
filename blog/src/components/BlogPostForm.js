import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const BlogPostForm = ({ onSubmit, initialValues = { title: '', content: '' } }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.title}>Enter Title</Text>
      <TextInput
        placeholder="title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Text style={styles.title}>Enter Content</Text>
      <TextInput
        placeholder="content"
        value={content}
        onChangeText={setContent}
        style={styles.input}
      />
      <Button title="Save Blog" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

export default BlogPostForm;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: "black",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
    fontSize: 14,
    marginBottom: 15,
  },
});
