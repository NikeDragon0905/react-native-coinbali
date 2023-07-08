import React from 'react';
import { View, Text, Switch , TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Left_Img from "../../assets/images/Left.png";
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import UploadImage from '../../assets/images/upload.png';
import CustomSelect from '../../components/CustomSelect';
import CheckedIcon from '../../assets/images/checked.png';
import PlusIcon from '../../assets/images/plus.png';
import { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import QuestionIcon from '../../assets/images/question.png'
export default ({setStep}) => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView style={styles.container}> 
        <View style={styles.containerview}>
            <View style={styles.topbar}>
                <TouchableOpacity onPress={() => setStep(3)} style={styles.topbar}>
                <Image source={Left_Img} style={styles.leftImg} />
                <Text  style={{fontWeight: 600, fontSize: 16, lineHeight: 19.5}}>Funding</Text>
                <Image source={Left_Img} style={styles.leftImgHidden} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 18, width: '100%', paddingHorizontal: 21}}>
                <Image source={CheckedIcon}/>
                <Image source={CheckedIcon}/>
                <Image source={CheckedIcon}/>
                <View style={{width: 23, height:23, backgroundColor: '#CCD4E9', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>4</Text></View>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 7, width: '100%', paddingHorizontal: 15}}>
                <Text style={{fontSize: 12, lineHeight: 15, color: '#67CB5E'}}>Basics</Text>
                <Text style={{fontSize: 12, lineHeight: 15, color: '#67CB5E'}}>Content</Text>
                <Text style={{fontSize: 12, lineHeight: 15, color: '#67CB5E'}}>Team</Text>
                <Text style={{fontSize: 12, lineHeight: 15, color: '#000000'}}>Funding</Text>
            </View>
            <Text style={styles.title}>Funding</Text>
            <View style={{flexDirection: "row", alignItems: 'center'}}>
              <Text style={styles.subtitle}>1.Select a plan</Text>

              <Image source={QuestionIcon} style={{width: 14, height: 14, marginLeft: 7, marginRight: 7}} />
              <Text style={styles.subtitle1}>Learn more about plans</Text>
            </View>
            <CustomSelect label='Select a plan' placeholder='Select a plan'  optionList={[]} handleSelect={() => {}} selectedOption={null}/>

            <Text style={{...styles.subtitle}}>2.Funding goal</Text>
            <Text style={styles.description1}>How much money do you want to receive to complete the Liftoff?</Text>

            <CustomInput label='Funding goal' placeholder='$  Funding goal' onChange={()=>{}} />
            <CustomInput label='Margin Money ' placeholder='$  Margin Money ' onChange={()=>{}} />
            <View style={{flexDirection: "row", alignItems: 'center', marginBottom: 24}}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
                color="#627BBB" // You can customize the border and fill color here
                uncheckedColor="#627BBB" // You can customize the unchecked border color here
              />
              <Text style={{fontSize: 15, color: '#000000'}}>I accept.</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
            <Text style={{...styles.subtitle}}>3.Funds Recipient Verification</Text>
            <Text style={{...styles.description1, marginLeft: 10, marginTop: 20}}>Not verified</Text>
            </View>
            <Text style={{...styles.description1}}>You must be verified to launch the Liftoff.</Text>
            <TouchableOpacity style={styles.sendInvitationButton} onPress={() => setStep(4)}> 
                <Text style={styles.sendInvitationButtonText}>Verify ID</Text>
            </TouchableOpacity>
            <Text style={{...styles.subtitle}}>4.Duration</Text>
            <Text style={{...styles.description1}}>Set the length time of the Liftoff.</Text>
            <CustomInput label='Enter number of days ' placeholder='Enter number of days ' onChange={()=>{}} />
            <TouchableOpacity style={styles.loginButton} onPress={() => setStep(5)}> 
                <Text style={styles.loginButtonText}>Save & Launch the Liftoff</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 44,
    paddingLeft: 24,
    paddingRight: 24,
    // fontFamily: 'Montserrat'
  },
  containerview: {
    marginBottom: 56
  },
  topbar: {
    height: 24,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  leftImg: {
    width: 24,
    height: 24
  },
  leftImgHidden: {
    width: 24,
    height: 24,
    opacity: 0
  },
  fullname: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 600,
    color: '#000000',
  },
  username: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 400,
    color: '#000000',
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    marginTop: 20,
    fontWeight: 500,
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#000000',
    marginTop: 20,
    marginBottom: 20
  },
  subtitle1: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '600',
    color: '#627BBB',
    marginTop: 20,
    marginBottom: 20
  },
  description: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 20,
    color: '#000000',
    lineHeight: 17,
    alignSelf: 'flex-start'
  },
  description1: {
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 20,
    color: '#000000',
    lineHeight: 17,
    opacity: 0.7,
    alignSelf: 'flex-start'
  },
  uploadButton: {
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#365195',
    width: '100%',
    height: 192,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  loginButton: {
    backgroundColor: '#627BBB',
    padding: 10,
    borderRadius: 5,
    marginTop: 26,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },  
  sendInvitationButton: {
    backgroundColor: '#627BBB',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 28,
    width: '30%',
    alignItems: 'center',
  },
  sendInvitationButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});