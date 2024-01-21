import React, {useEffect, useState} from "react";
import {db} from "../Firebase/firebase";
import {getDoc, docs, updateDoc, doc, setDoc, where, orderBy, collection} from "firebase/firestore";
import {getDocs, query} from "firebase/firestore";
import {
    Box,
    Button,
    Center,
    Text,
    VStack,
    HStack,
    useDisclosure,
} from "@chakra-ui/react";


// get all profiles

export default function StudentLeaderboard() {
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        getProfiles().then((profiles) => {
            console.log(profiles)
            setProfiles(profiles);
        });
    }, [])
    const getProfiles = async () => {
        const q = query(collection(db, "profiles"));
        const querySnapshot = await getDocs(q);
        // rank profiles by elo

        const sortedProfiles = querySnapshot.docs.sort((a, b) => {
            return b.data().elo - a.data().elo;
        });

        const profiles = [];
        sortedProfiles.forEach((doc) => {

            profiles.push(doc.data());
        });
        return profiles;
    };
    return (
        <Box color={'brand.900'} width={'100%'}>
            <Text widrh>
                HI
            </Text>
            <Center width={'100%'}>
                <VStack width={'100%'}>
                    <Box width={'60%'} bg={'#DDD3E4'}>
                        <HStack>
                            <Text width={'10%'}>Rank</Text>
                            <Text>Name</Text>
                            <Text>Elo</Text>
                        </HStack>
                    </Box>
                    <VStack width={'100%'}>
                        {profiles.map((profile,) => (

                            <Box bg={'#DDD3E4'} width={'60%'} h={'100px'}>
                                <Text>{profile.elo}</Text>
                            </Box>
                        ))}
                    </VStack>
                </VStack>
            </Center>
        </Box>

    );
}
