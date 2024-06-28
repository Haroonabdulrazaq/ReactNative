import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
  Button} from 'react-native';

export default function TabLayout() {
  interface IItem {
    id: string;
    title: string;
    body: string
  }
  const [postList, setPostList] = useState<IItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState<any>("");

  const handleRefresh = async() => {
    setRefreshing(true)
    fetchData(20);
    setRefreshing(false);
  }
  const handleSubmit = async() => {
    setIsPosting(true);
    try{
        const response = await fetch('https://jsonplaceholder.typicod.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          body,
          userId: 1
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      setPostList([data,... postList]);
      setIsPosting(false);
      setTitle("");
      setBody("");
    }catch(error) {
      console.error("Error posting data", error);
      setIsPosting(false);
      setError("Failed to post data");
    }
  }

  const fetchData = async(limit=10)=> {
    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const data = await response.json();
      setPostList(data);
      setIsLoading(false);
      setError("");
    }catch(error) {
      console.error("Error fetching data", error);
      setIsLoading(false);
      setError("Failed to fetch post list");
    }
  }
  useEffect(() => {
    fetchData(1);
  }, []);
  if(isLoading){
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="green" />
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }
  return (
      <SafeAreaView style={styles.container}>
        {error?<View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error && error }</Text>
        </View>: null}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Title'
            value={title}
            onChangeText={setTitle}
            autoCapitalize='sentences'
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder='Title'
            value={body}
            onChangeText={setBody}
            autoCapitalize='none'
            numberOfLines={4}
            multiline
          />
          <Button title="Submit" onPress={handleSubmit} disabled={isPosting} />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={postList}
            renderItem = {({item}) => (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.id}. {item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            )}
            ItemSeparatorComponent={()=>{
              return <View style={{height: 16}}/>
            }}
            ListEmptyComponent={<Text> No Posts Found</Text>}
            ListHeaderComponent={<Text style={styles.headerText}>Posts List</Text>}
            ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    color: "black",
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    padding: 16,
    borderRadius: 8,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    shadowColor: "#000",
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 24,
    color:"#666666",
  },
  headerText:{
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
  footerText:{
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    marginHorizontal: 16
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dddddd",
    margin: 16,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    color: "white",
    borderRadius: 8,
    width: "50%",
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center"  
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  errorContainer: {
    backgroundColor: "#FF0E0E",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  errorText: {
    color: "white",
    fontSize: 20,
    textAlign: 'center',
  }
});
