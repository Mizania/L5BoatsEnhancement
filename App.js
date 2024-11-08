import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boats = ({ name, description, icon_name, poster }) => {
    return (
        <View style={styles.boatCard}>
            <View style={styles.header}>
                <Icon name={icon_name} size={24} color="#fff" style={styles.icon} />
                <Text style={styles.boatName}>{name}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
            <Image source={poster} style={styles.poster} />
        </View>
    );
};

const AllBoats = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>GetABoat - For Sale</Text>
            <Boats
                name="SEA RAY 500 SUNDANCER"
                icon_name="sailboat"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                poster={require('./img/sea_ray.jpg')}
            />
            <Boats
                name="FOUR WINNS HORIZON 180"
                icon_name="sailboat"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                poster={require('./img/four_winns.jpg')}
            />
            <Boats
                name="FLIPPER 640 ST"
                icon_name="sailboat"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                poster={require('./img/flipper.jpg')}
            />
            <Boats
                name="PRINCESS V48"
                icon_name="sailboat"
                description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                poster={require('./img/princess.jpg')}
            />
            <Boats
                name="BAYLINER 175 BOWRIDER"
                icon_name="sailboat"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                poster={require('./img/bayliner.jpg')}
            />
            <Boats
                name="FAIRLINE TARGA 47"
                icon_name="sailboat"
                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                poster={require('./img/fairline.jpg')}
            />
        </ScrollView>
    );
};

export default AllBoats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2d2d2d',
        textAlign: 'center',
        marginBottom: 20,
    },
    boatCard: {
        backgroundColor: '#fff',
        marginBottom: 20,
        padding: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 8,
    },
    icon: {
        marginRight: 10,
    },
    boatName: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
    },
    descriptionContainer: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 8,
        marginBottom: 15,
    },
    description: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
    poster: {
        width: '100%',
        height: 250,
        borderRadius: 8,
        marginBottom: 15,
    },
});
