import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((item) => item.id === navigation.getParam("id"));

  return (
    <View style={{ padding: 20 }}>
      <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
          editBlogPost(blogPost.id, title, content, () => {
            navigation.navigate("Index");
          });
        }}
      />
    </View>
  );
};

EditScreen.navigationOptions = {
  title: "Edit",
};

export default EditScreen;

const styles = StyleSheet.create({});
