import React, {useEffect, useState} from 'react';
import{View, Text, FlatListm, Image, StySheet, ScrollView, TouchableOpacity, Dimensions, SafeAreaView,Platform, TextInput} from 'react-native';
import axios from 'axios';

const Screen_01 = () => {
    const [category, setCategory] = useEffect ([]);
    const [location, setLocation] = useEffect ([]);
    const [searchQuery, setSearchQuery] = useEffect ('');
    const [seacrchFocused, setSearchFocused] = useEffect (false);

    const screenWidth = Dimensions.get('window').width;

    useEffect(()=> {
        axios.get('https://671ba9d92c842d92c380d3a1.mockapi.io/category').then((response) => {
            setCategory(response.data);
        });
        axios.get('https://671ba9d92c842d92c380d3a1.mockapi.io/location').then((response) =>{
        });
    }, []);

    const numColumns = 4;
    return(
        <SafeAreaView style={StyleSheet.safeArea}>
            <View style={styles.container}>
                <ScrollView style={{width: "100%", height: 500}}>
                {/* Header */}
                <View style={styles.headerContainer}>
                   <View style={styles.header}>
                      <Image source={require('../assets/logoicon.png')} style={styles.logoicon}/>
                      <View style={[styles.searchBox, searchFocused && styles.inputContainerFocused]}>
                        <TextInput 
                            style={style.searchInput}
                            placeholder="Search here..."
                            value={searchQuery}
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                            onChangeText={setSearchQuery}
                        />
                        <Image source={require('../assets/findicon.png')} style={styles.searchIcon}/>
                      </View>
                    </View>

                    <View style={styles.userInfoContainer}>
                     <View style={styles.userInfo}>
                        <Image source={require('../assets/personicon.png')} style={styles.userImage}/>
                        <View>
                            <Text style={styles.welcomeText}>Welcome!</Text>
                            <Text style={styles.userName}>Donna Stroupe</Text>
                        </View>
                     </View>
                     <Image source={require('../assets/ringicon.png')} style={styles.iconBell}/>
                   </View>
                </View>

                

                </ScrollView>
            </View>
        </SafeAreaView>
    )




}