import {TextInput,Text} from 'react-native';

const InputField = ({title,setField}) =>{
    return(
    <>
    
    <Text style={{ fontSize: 18, color: "white",marginTop:10}}>{title}</Text>
    <TextInput
            placeholder={title}
            selectionColor="white"
            onChangeText={setField}
            placeholderTextColor="gray"
            style={{
              color: "whitesmoke",
              height: 50,
              borderRadius: 3,
              borderWidth: 3,
              borderColor: "whitesmoke",
              paddingHorizontal: 10,
              marginTop: 10,
            }}
          />
    </>
    );
}

export default InputField;