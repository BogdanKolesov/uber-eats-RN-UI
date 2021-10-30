import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const ViewCart = ({ restaurantName, active }) => {
    const items = useSelector((state) => state.cartReducer.selectedItems.items)
    const total = items
        .map((item => Number(item.price.replace('$', ''))))
        .reduce((prev, curr) => prev + curr, 0)

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })
    console.log(totalUSD)


    return (

        <>
            {total ? (
                < View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 20,
                    elevation: (Platform.OS === 'android') ? 50 : 0,
                    zIndex: 5,
                    opacity: active ? 1 : 0

                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                        <TouchableOpacity style={{
                            marginTop: 20,
                            backgroundColor: 'black',
                            alignItems: 'center',
                            padding: 13,
                            borderRadius: 30,
                            width: 300,
                            position: 'relative',
                        }}>
                            <Text style={{ color: 'white', fontSize: 20 }}>
                                ${totalUSD}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View >
            ) : (<Text> </Text>)}
        </>
    );
}

const styles = StyleSheet.create({})

export default ViewCart;
