import React from 'react';
import {Text, StyleSheet,FlatList,View} from 'react-native';
import {Container, Header, Content, Button, Input, Card, CardItem,CheckBox} from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from './actions';

class TodoList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id:0,
            mensaje:"",
            estado:false,
            color:'red'
        };
    }
    
   
    render() {
    // JSX magic
    const {
        items,
        addItem,
        editItem,
        deleteItem,
    } = this.props;
    
    return (
        <Container>
            <Header />
            <Content>
                <Card>
                   
                    <CardItem  bordered>
                        <Input placeholder="Ingresar acción" onChangeText={(text) => this.setState({mensaje:text})}/>
                    </CardItem>
                    
                    <CardItem  bordered style={styles.cardButtonSection}>
                        <Button success style={styles.buttonIngresar} onPress={() => {
                                this.setState({id:(items.length+1)});
                                addItem(this.state);}}>
                            <Text style={styles.textButtonStyle}>Ingresar</Text>
                        </Button>
                        
                    </CardItem>
                
                </Card>
                <Text style={styles.textStyle}>Todo List</Text>
                
                <FlatList 
                    data={items}
                    renderItem={({ item }) => (
                        <Card>
                            <CardItem header button bordered onPress={()=>editItem(item)}>
                                <CheckBox checked={item.estado}  onPress={()=>editItem(item)} color={item.color} />
                                <View style={{ width: 50 }} />
                                <Text>{item.mensaje}</Text>
                                <View style={{ width: 50 }} />
                                
                            </CardItem>
                            <Button transparent light style={styles.deleteButton} onPress={()=>deleteItem(item)}>
                                    <Text>Eliminar</Text>
                            </Button>
                        </Card>
                      )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Content>
        </Container>
    );
  }
}




const styles = StyleSheet.create({
    cardButtonSection: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
     },
     buttonIngresar:{
        width: '40%',
        justifyContent: 'center',
        color:'#fff'
     },
     textStyle:{
        fontWeight: 'bold', 
        height: 30,
        alignSelf: 'center',
        fontSize: 20
     },
     textButtonStyle:{
        fontWeight: 'bold', 
        height: 30,
        alignSelf: 'center',
        fontSize: 20,
        color:'white'
     },
     deleteButton:{
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20
     }

});




function mapStateToProps(state) {
    const { items } = state;
    return {
        items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: bindActionCreators(actions.addItem, dispatch),
        editItem: bindActionCreators(actions.editItem,dispatch),
        deleteItem: bindActionCreators(actions.deleteItem,dispatch),
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

