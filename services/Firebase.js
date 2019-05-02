import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default class Firebase extends React.Component{

  constructor(props)
  {
    super(props);
 
  var config = {
    apiKey: "AIzaSyCixAeqcQmV-CcbKOQnNTD9oArTLp55Exo",
    authDomain: "mobileappfirebase-50d2e.firebaseapp.com",
    databaseURL: "https://mobileappfirebase-50d2e.firebaseio.com",
    projectId: "mobileappfirebase-50d2e",
    storageBucket: "mobileappfirebase-50d2e.appspot.com",
    messagingSenderId: "734856525068"
  };

if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

  this.state = {
    orders: [],
    db: firebase.firestore()
  }

  this.HandleDatabaseRead = this.HandleDatabaseRead.bind(this);
  this.GetAllOrders = this.GetAllOrders.bind(this);

 }

 GetAllOrders(){

  //console.log(`Speaker ID: ${SpeakerID}`);

  let ordersRef = this.state.db.collection("Profiles");

  ordersRef.get()
           .then( (querySnapshot) => {
             if(!querySnapshot.empty){
              this.HandleDatabaseRead(querySnapshot);
             }
           })
           .catch((error) => 
           {
              console.log(error);
           });
}

//callback for firebase to call
HandleDatabaseRead(data){

  //console.log("FIRESTORE_TEST", data);

  const ords = [];

  data.forEach( (doc) => {

    //destructure data
    const { FirstName, LastName, About } = doc.data();

    let listItem = {
     
      key: doc.id,
      item: FirstName,
      LastName: LastName,
      About: About
     
    }

    ords.push(listItem);
  });

  console.log(ords);
  this.setState(
    {
      orders: ords
    }
  )
}  

componentDidMount()
{
  this.GetAllOrders();
}  

render() {
  return (
    <View style={styles.container}>
      <Text>Profiles</Text>
      <FlatList data={this.state.orders}
                renderItem={({item}) => <Text style={styles.item}>{item.item} {item.LastName}  {item.About}</Text>} 
                     
      />
    </View>
  );
}

}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100    
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },  
});


