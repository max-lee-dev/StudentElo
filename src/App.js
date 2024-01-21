import "./App.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";

import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import {ChakraProvider, Box, extendTheme} from "@chakra-ui/react";
import {db} from "./Firebase/firebase";
import {collection, getDocs, onSnapshot, query, where, doc} from "firebase/firestore";
import {useEffect, useState} from "react";
import {auth} from "./Firebase/firebase";
import {onAuthStateChanged} from "firebase/auth";

const theme = extendTheme({
    colors: {},
});

function App() {


    const [username, setUsername] = useState("");
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('test')
        setLoading(true);

        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                setUser(user); // set temp user data which is the auth data
            } else {
                console.log('not logged in');
            }
        });

        async function getUserSettings() {

            const unsub = onSnapshot(doc(db, "users", auth.currentUser.uid), (doc) => {
                console.log("Current data: ", doc.data());
                setUser(doc.data());

            });
            // querySnapshot.forEach((doc) => {
            //     setUserData(doc.data());
            // });
        }

        if (auth.currentUser) getUserSettings().then(() => setLoading(false));
        else setLoading(false);
    }, []);

    const theme = extendTheme({
        colors: {
            brand: {
                100: "#f7fafc",
                // ...
                900: "#1a202c",
            },
        },
    });


    return (
        <Router>
            <ChakraProvider className="font" theme={theme}>
                <Box bg="#f2f2f2" color="white" minH={'100vh'}>
                    <Navbar/>
                    <Box paddingTop={16}>

                        <Routes>
                            <Route path="/" element={<Home user={user}/>}/>
                            <Route path="/login" element={<LogIn/>}/>
                            <Route path="/create" element={<Create user={user}/>}/>

                        </Routes>
                    </Box>
                </Box>
                {/*<Footer/>*/}
            </ChakraProvider>
        </Router>
    );
}

export default App;