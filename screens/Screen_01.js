import React, {useEffect, useState} from 'react';
import{View, Text, FlatListm, Image, StySheet, ScrollView, TouchableOpacity, Dimensions, SafeAreaView,Platform, TextInput} from 'react-native';
import axios from 'axios';
import { FlatList } from 'react-native-web';

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

                {/* Categories */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Category</Text>
                    <Image source={require('../assets/3gach.png')} style={styles.icon3gach}/>
                </View>
                <FlatList
                    data={category}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={[styles.categoryItem, {width: screenWidth / numColumns }]}>
                            <View style={styles.categoryIconContainer}>
                                <Image source={{ uri: item.image }} style={styles.categoryIcon}/>
                            </View>
                            <Text style={styles.categoryText}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    numColumns={numColumns}
                />

                {/* Recommended */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Popular Destination</Text>
                </View>
                <FlatList 
                    data={location.slice(3, 5)}
                    horizontal
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <Image source={{ uri: item.image}} style={styles.locationImageOfRec}/>
                    )}
                />
                </ScrollView>
            </View>
        </SafeAreaView>
    )




}