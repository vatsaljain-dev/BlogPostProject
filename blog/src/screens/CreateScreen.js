import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <View style={{ padding: 20 }}>
        <BlogPostForm
        onSubmit={(title, content) => {
         addBlogPost(title, content, () => {
            navigation.navigate("Index");
          });
        }}
      />
    </View>
  );
};

CreateScreen.navigationOptions = {
  title: "Create Blog",
};

export default CreateScreen;

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
