import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class App extends React.Component {

  constructor(props)
  {
    super(props);

    var config = {
      //expo allows for secrets and keys access: https://docs.expo.io/versions/latest/workflow/configuration/
      apiKey: Expo.Constants.manifest.extra.firebaseAPIKey,
      authDomain: "cidm4385-spring2019.firebaseapp.com",
      databaseURL: "https://cidm4385-spring2019.firebaseio.com",
      projectId: "cidm4385-spring2019",
      storageBucket: "cidm4385-spring2019.appspot.com",
      messagingSenderId: "902346719730"
    };

    //ensure that no more than one firebase is instantiated
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

  GetAllOrders(email){

    console.log(`USING EMAIL: ${email}`);

    let ordersRef = this.state.db.collection("orders");

    ordersRef.where("email", "==", `${email}`).get()
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
      const { item } = doc.data();

      let listItem = {
        key: doc.id,
        item: item
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
    this.GetAllOrders("ahuimanu@gmail.com");
  }  

  render() {
    return (
      <View style={styles.container}>
        <Text>PIZZA ORDERS</Text>
        <FlatList data={this.state.orders}
                  renderItem={({item}) => <Text style={styles.item}>{item.item}</Text>} 
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