import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

// Add: com
const Searchbar = ({ cityHandler }) => {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row' }}>
            <GooglePlacesAutocomplete
                query={{
                    key: 'AIzaSyB0zfwuXS4ql_Y2fQbuH6YCumbDFP_9r7w',
                    language: 'en'
                }}
                onPress={(data, details = null) => {
                    console.log(data.description)
                    const city = data.description.split(',')[0]
                    cityHandler(city)
                }}
                placeholder='Search'
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10
                    }
                }}

                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name='location-sharp' size={24} />
                    </View>
                )}

                renderRightButton={() => (
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        marginRight: 8,
                        backgroundColor: 'white',
                        padding: 9,
                        borderRadius: 30,
                        alignItems: 'center'

                    }}>
                        <AntDesign name='clockcircle' size={11} style={{ marginRight: 6 }} />
                        <Text>Search</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default Searchbar;
