import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Left_Img from "../../assets/images/Left.png";
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import UploadImage from '../../assets/images/upload.png';
import CustomSelect from '../../components/CustomSelect';

export default ({setStep}) => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
        <View style={styles.containerview}>
            <View style={styles.topbar}>
                <TouchableOpacity onPress={() => setStep(0)} style={styles.topbar}>
                <Image source={Left_Img} style={styles.leftImg} />
                <Text  style={{fontWeight: 600, fontSize: 16, lineHeight: 19.5}}>Basics</Text>
                <Image source={Left_Img} style={styles.leftImgHidden} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 18, width: '100%', paddingHorizontal: 21}}>
                <View style={{width: 23, height:23, backgroundColor: '#ABB6D2', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>1</Text></View>
                <View style={{width: 23, height:23, backgroundColor: '#CCD4E9', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>2</Text></View>
                <View style={{width: 23, height:23, backgroundColor: '#CCD4E9', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>3</Text></View>
                <View style={{width: 23, height:23, backgroundColor: '#CCD4E9', borderRadius: 11.5, flexDirection:"row", alignItems:"center", justifyContent: "center"}}><Text style={{fontSize: 12, lineHeight: 15, color: '#FFFFFF'}}>4</Text></View>
            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 7, width: '100%', paddingHorizontal: 15}}>
                <Text style={{fontSize: 12, lineHeight: 15, color: '#000000'}}>Basics</Text>
                <Text style={{fontSize: 12, lineHeight: 15, color: '#000000', opacity: 0.5}}>Content</Text>
                <Text style={{fontSize: 12, lineHeight: 15, color: '#000000', opacity: 0.5}}>Team</Text>
                <Text style={{fontSize: 12, lineHeight: 15, color: '#000000', opacity: 0.5}}>Funding</Text>
            </View>
            <Text style={styles.title}>Introduce your Liftoff. </Text>
            <Text style={styles.subtitle}>1.Liftoff title </Text>
            <Text style={styles.description}>Welcome to Coinbali! We send an email to john12@mail.com to confirm your email address. </Text>
            <CustomInput label='Title' placeholder='Title' onChange={()=>{}} />
            <CustomInput label='Subtitle' placeholder='Subtitle' onChange={()=>{}} />
            <Text style={{...styles.subtitle, marginTop: 20}}>2.Liftoff image</Text>
            <Text style={styles.description}>Upload an image that represents your Liftoff. </Text>
            <View style={styles.uploadButton}>
                <Image source={UploadImage} />
            </View>
            <Text style={styles.subtitle}>4.Category</Text>
            <Text style={styles.description}>Select a category and subcategory to help backers find your project.</Text>
            <CustomSelect label='Category' placeholder='Category'  optionList={[]} handleSelect={() => {}} selectedOption={null}/>
            <CustomSelect label='Subcategory' placeholder='Subcategory'  optionList={[]} handleSelect={() => {}} selectedOption={null}/>
            
            <TouchableOpacity style={styles.loginButton} onPress={() => setStep(2)}>
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
  title: {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 20,
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 20,
    fontWeight: '500',
    color: '#000000',
  },
  description: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 10,
    color: '#000000',
    opacity: 0.7,
    lineHeight: 17,
    marginBottom: 20,
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
});