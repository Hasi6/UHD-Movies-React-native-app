import React, { Component } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import { Content, List, ListItem, Button } from "native-base";
import Textarea from "react-native-textarea";
import axios from "axios";

class Comments extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    movieId: this.props.id,
    enabled: true,
    comments: [
      {
        createdDate: "",
        email: "",
        message: "",
        movieId: "",
        name: "",
        _id: ""
      }
    ]
  };

  componentDidMount = async () => {
    try {
      const res = await axios.get(
        `https://uhdmovies.herokuapp.com/single/${this.props.id}`
      );
      await this.setState({
        comments: res.data.comments
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  onChangeText = (e, name) => {
    this.setState({
      [name]: e
    });
  };

  renderComment = () => {
    return this.state.comments.map(comment => {
      return (
        
          <ListItem key={comment.id}>
            <View>
              <Text>
                {comment.name}
                {"\n"} {comment.message}
                {"\n"}
                {comment.createdDate}
              </Text>
            </View>
          </ListItem>
      );
    });
  };

  addComment = async () => {
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.message === ""
    ) {
      return alert("Please Fill All the Fields");
    }
    const body = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    const res = await axios.post(
      `https://uhdmovies.herokuapp.com/comments/${this.props.id}`,
      body,
      {
        headers: {
          "content-Type": "application/json"
        }
      }
    );
    this.setState({
      comments: res.data.comments,
      name: "",
      email: "",
      message: ""
    });
  };

  enableDisable = enable => {
    this.props.scroll(enable);
  };

  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <View>
          <Text>Add Comments</Text>
          <TextInput
            style={{ height: 40, backgroundColor: "azure", fontSize: 20 }}
            placeholder="Name"
            value={this.state.name}
            name="name"
            onChangeText={e => this.onChangeText(e, "name")}
          />
          <TextInput
            style={{ height: 40, backgroundColor: "azure", fontSize: 20 }}
            placeholder="Email"
            value={this.state.email}
            name="email"
            onChangeText={e => this.onChangeText(e, "email")}
          />
          <View style={styles.container}>
            <Textarea
              containerStyle={styles.textareaContainer}
              style={styles.textarea}
              placeholder="Message"
              value={this.state.message}
              containerStyle={styles.textareaContainer}
              style={styles.textarea}
              name="message"
              maxLength={120}
              placeholder={"Your Message。。。"}
              placeholderTextColor={"#c7c7c7"}
              underlineColorAndroid={"transparent"}
              onChangeText={e => this.onChangeText(e, "message")}
            />
          </View>
        </View>
        <Button onPress={() => this.addComment()}>
          <Text>Add Comment</Text>
        </Button>
        <Text>Comments</Text>
        <View style={{ height: 100 }}>
          <ScrollView 
          onTouchStart={ev => {
            this.enableDisable(false);
          }}
          onTouchMove={ev => {
            this.enableDisable(false);
          }}
          onTouchCancel={e => {
            this.enableDisable(true);
          }}
          onTouchEnd={e => {
            this.enableDisable(true);
          }}>{this.renderComment()}</ScrollView>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: "#F5FCFF"
  },
  textarea: {
    textAlignVertical: "top", // hack android
    height: 170,
    fontSize: 14,
    color: "#333"
  }
};

export default Comments;
