import React, { Component } from 'react';
import {StyleSheet, View, Text, ScrollView } from 'react-native';

//Native base
import {Icon, Form, Item, Input, Label, Left, Right, Body, Card, CardItem, List, ListItem, CheckBox, Button } from 'native-base';

//Styles
import styles from '../styles';

//Pickers
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import CategoryPicker from './CategoryPicker';


class Task extends Component {

    //Main navigation options
    static navigationOptions = ({navigation}) => {

        navOptions = navigation;
        const {params = {} } = navigation.state;

        return {

            drawerLabel: 'Task',
            drawerLockMode: 'locked-closed',
            headerLeft: (
              <Button transparent> 
              <Icon name="arrow-back" style={{fontSize: 26, color: 'white'}}/>
              </Button>

              ),
            headerRight: (
              <Button transparent> 
              <Icon name="checkmark" style={{fontSize: 40, color: 'white'}}/>
              </Button>

              )
        }
    }

    render() {

    //const { navigate } = this.props.navigation;
    return (
        <ScrollView>
       
            <Card style={styles.card}>

                <CardItem>

                    <Left>  
                        
                        <Body>
                            
                            <Text style={styles.cardTopText}>Primary</Text>
                        
                        </Body>
                    
                    </Left>

                </CardItem>

                <CardItem>

                    <Body >   

                        <ListItem style={styles.item}>
      
                            <CheckBox checked={true} color={'#F78233'} style={styles.checkBox}/>
                                
                                <Body>
                                    
                                    <Text style={styles.formText}>Daily Stand Up</Text>
                                </Body>

                        </ListItem>

                        <ListItem style={styles.item}>
                            
                            <CheckBox checked={false} color={'#F78233'} style={styles.checkBox}/>
                        
                            <Body>
                                
                                <Text style={styles.formText}>Discussion with Client</Text>
                            
                            </Body>
                        
                        </ListItem>

                    </Body>

                </CardItem>  

            </Card>

            <Card style={styles.card}>

                <CardItem>

                    <Left>  
                        
                        <Body>
      
                            <Text style={styles.cardTopText}>Additional</Text>
                        
                        </Body>
      
                    </Left>

                </CardItem>

                <CardItem>

                    <Form>
                    
                        <Item style={styles.itemAdditionalTask}>
                            <Icon name='browsers' />
                            <Input placeholder="Name" style={styles.formText}/>
                        </Item>
      
                        <Item style={styles.itemAdditionalTask}>
                            <Icon name='book' />
                            <Input placeholder="Note" style={styles.formText}/>
                        </Item>

                        <Item style={styles.itemAdditionalTask}>
                            <Icon name='list' style={styles.iconCategory} />
                            <CategoryPicker/>
                        </Item>

                        <Item style={styles.itemAdditionalTask}>
                            <Icon name='calendar' />
                            <DatePicker/>
                        </Item>

                        <Item style={styles.itemAdditionalTask}>
                            <Icon name='clock' />
                            <TimePicker/>
                        </Item>
                    </Form>

                </CardItem>

            </Card>          

        </ScrollView>
    );
}
}

export default Task;