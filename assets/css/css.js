import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textPage:{
        backgroundColor:'blue',
        padding: 20
    },
    area__tab:{
        backgroundColor: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        color:'#333'
    },
    tela_login:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5FCFF'
    },
    containerLogo: {
      flex: 1,
      justifyContent: 'center',
      marginBottom: 10,
    },
    msg_login:(text='none')=>({
      fontWeight:"bold",
      fontSize: 15,
      color:"red",
      marginTop: 5,
      marginBottom: 15,
      display: text
  }),
    form_login: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      paddingBottom: 50
    },
    input_login: {
      backgroundColor: '#FFF',
      width: '90%',
      marginBottom: 15,
      color: '#222',
      fontSize: 17,
      borderRadius: 7,
      padding: 10,
    },
    btnSubmit_login: {
      backgroundColor: '#87cefa',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7
    }, 
    submitText_login:{
      fontSize: 18
    },
<<<<<<< HEAD
    
=======
    btnRegister_login: {
      marginTop: 10,  
    },

>>>>>>> 0d6b74da960801e8c81785ea3d7d99af450091f5
  });
  export {css};