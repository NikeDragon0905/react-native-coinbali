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
import ProfileIcon from '../../assets/images/Profile.png'

export default ({setStep}) => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView style={styles.container}> 
        <View style={styles.containerview}>
            <View style={styles.topbar}>
                <TouchableOpacity onPress={() => setStep(2)} style={styles.topbar}>
                <Image source={Left_Img} style={styles.leftImg} />
                <Text  style={{fontWeight: 600, fontSize: 16, lineHeight: 19.5}}>Team</Text>
                <Image source={Left_Img} style={styles.leftImgHidden} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 18, width: '100%', paddingHorizontal: 21}}>
                <Image source={CheckedIcon}/>
                <Image source={CheckedIcon}/>
                <View style={{width: 23, height:23, backgroundColor: '#CCD4E9', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>3</Text></View>
                <View style={{width: 23, height:23, backgroundColor: '#CCD4E9', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>4</Text></View>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 7, width: '100%', paddingHorizontal: 15}}>
                <Text style={{fontSize: 12, lineHeight: 15, color: '#67CB5E'}}>Basics</Text>
                <Text style={{fontSize: 12, lineHeight: 15, color: '#67CB5E'}}>Content</Text>
                <Text style={{fontSize: 12, lineHeight: 15, color: '#000000'}}>Team</Text>
                <Text style={{fontSize: 12, lineHeight: 15, color: '#000000', opacity: 0.5}}>Funding</Text>
            </View>
            <Text style={styles.title}>Team</Text>
            <Text style={styles.description}>If you are working in a team, send them an email invitation so we can confirm them. Each team member needs to have a Coinbali account.</Text>
          
            <Text style={styles.subtitle}>1.Add New Team Member </Text>
            <CustomInput label='Team member Email' placeholder='Email' onChange={()=>{}}/>
            <View style={{flexDirection: "row"}}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
                color="#627BBB" // You can customize the border and fill color here
                uncheckedColor="#627BBB" // You can customize the unchecked border color here
              />
              <Text style={{}}>Give this team member full rights to data and editing rights.</Text>
            </View>
            <TouchableOpacity style={styles.sendInvitationButton} onPress={() => setStep(4)}> 
                <Text style={styles.sendInvitationButtonText}>Send Invitation</Text>
            </TouchableOpacity>
            <Text style={{...styles.subtitle}}>2.Team owner</Text>
            <View style={{flexDirection: "row", marginBottom: 20, alignItems: "center"}}>
              <Image source={ProfileIcon} style={{width: 50, height: 50}} />
              <View style={{marginLeft: 10, flexDirection: "column"}}>
                <Text style={styles.fullname}>Daniel Neal</Text>
                <Text style={styles.username}>@danielneal</Text>
              </View>
            </View>
            <CustomInput label='Role' placeholder='Project creator' onChange={()=>{}} />
      
             
            <TouchableOpacity style={styles.loginButton} onPress={() => setStep(4)}> 
                <Text style={styles.loginButtonText}>Save & Continue</Text>
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
    marginTop: 43,
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
    marginTop: 28,
    marginBottom: 48,
    width: '50%',
    alignItems: 'center',
  },
  sendInvitationButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});