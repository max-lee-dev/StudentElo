import {useState, useEffect} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
} from "firebase/auth";

import {auth, db, signInWithGoogle} from "../Firebase/firebase";
import {
    Box,
    Center,
    Input,
    Button,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/react";
import {setDoc, doc, docs, getDocs, collection} from "firebase/firestore";

function LoginPage() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const [user, setUser] = useState({});
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getUsers();
    }, []);
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) setUser(currentUser);
        });
    }, []);

    async function createNewUser(uid) {
        await setDoc(doc(db, "users", uid), {
            displayName: username,
            email: registerEmail,
            account_created: new Date().toUTCString(),
            uid: uid,
        });
    }

    async function register(e) {
        e.preventDefault();
        try {
            let ok = true;
            //eslint-disable-next-line
            users.map((user) => {
                if (user.displayName === username) {
                    ok = false;
                }
            });
            if (!ok) return setError("Username already in use");

            if (username === "") {
                setError("Username cannot be empty");
                return;
            }

            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            await updateProfile(auth.currentUser, {displayName: username}).catch(
                (err) => console.log(err)
            );

            console.log(auth.currentUser.uid);
            setError("");
            createNewUser(auth.currentUser.uid);
        } catch (error) {
            console.log(error.message);
            if (
                error.message === "Firebase: Error (auth/invalid-email)." ||
                error.message === "Firebase: Error (auth/internal-error)."
            ) {
                setError("Invalid email");
            } else if (
                error.message ===
                "Firebase: Password should be at least 6 characters (auth/weak-password)."
            ) {
                setError("Password should be at least 6 characters");
            } else if (
                error.message === "Firebase: Error (auth/email-already-in-use)."
            ) {
                setError("Email already in use");
            }
        }
    }

    function createNewGoogleUser(uid, name, email) {

        console.log(`tESTTT: name: ${name}, email: ${email}, uid: ${uid}`)

        async function wait() {
            setDoc(doc(db, "users", uid), {
                displayName: name,
                email: email,
                account_created: new Date().toUTCString(),
                uid: uid,
            });
            if (auth)
                updateProfile(auth.currentUser, {displayName: name}).catch((err) =>
                    console.log(err)
                );
        }

        wait().then(() => {
            console.log("testasds")
            window.location.replace(`/`);
        });
    }

    function google() {
        let login = false;
        const userInfo = signInWithGoogle()
            .then((result) => {
                const name = result.user.displayName;
                const email = result.user.email;
                const uid = result.user.uid;
                console.log(
                    `name: ${name}, email: ${email}, uid: ${uid}, login: ${login}`
                )
                users.map((user) => {
                    if (user.uid === uid) {
                        login = true;
                    }
                });
                let tryThisName = name;

                if (!login) {
                    let numDuplicates = 2;
                    while (true) {
                        let ok = true;
                        //eslint-disable-next-line
                        users.map((user) => {
                            if (user.displayName === tryThisName) {
                                ok = false;
                            }
                        });
                        if (ok) {
                            createNewGoogleUser(uid, tryThisName, email);
                            break;
                        }
                        tryThisName = `${tryThisName} (${numDuplicates})`;
                        numDuplicates++;
                    }
                }
                if (login) {
                    window.location.replace(`/`);
                }
            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
            });
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            setError("");
        } catch (error) {
            setError(error.message);
            console.log(error.message);
        }
    };

    const logout = async () => {
        if (user) {
            await signOut(auth);
            window.location.reload();
        }
    };

    return (
        <Box className="mainFont">
            <HStack justifyContent="space-evenly">
                <Box>
                    <VStack>
                        <Text fontSize="3xl" fontWeight={600}>
                            {" "}
                            Register{" "}
                        </Text>
                        <Input
                            htmlSize={40}
                            width="auto"
                            _hover={{bgColor: "white"}}
                            marginTop="20px"
                            variant="filled"
                            placeholder="Username..."
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />
                        <Input
                            htmlSize={40}
                            width="auto"
                            _hover={{bgColor: "white"}}
                            marginTop="40px"
                            variant="filled"
                            placeholder="Email..."
                            onChange={(event) => {
                                setRegisterEmail(event.target.value);
                            }}
                        />

                        <Input
                            htmlSize={40}
                            width="auto"
                            _hover={{bgColor: "white"}}
                            marginTop="40px"
                            marginBottom="40px"
                            variant="filled"
                            placeholder="Password..."
                            type={"password"}
                            onChange={(event) => {
                                setRegisterPassword(event.target.value);
                            }}
                        />
                        <Button onClick={register}>Register</Button>
                    </VStack>
                </Box>

                <Box paddingTop="3px">
                    <VStack>
                        <Text fontWeight={600} fontSize="3xl">
                            {" "}
                            Login{" "}
                        </Text>
                        <Input
                            htmlSize={40}
                            width="auto"
                            _hover={{bgColor: "white"}}
                            variant="filled"
                            placeholder="Email..."
                            onChange={(event) => {
                                setLoginEmail(event.target.value);
                            }}
                        />

                        <Input
                            htmlSize={40}
                            width="auto"
                            _hover={{bgColor: "white"}}
                            marginTop="40px"
                            variant="filled"
                            placeholder="Password..."
                            type="password"
                            onChange={(event) => {
                                setLoginPassword(event.target.value);
                            }}
                        />
                        <Box>
                            <Button
                                onClick={google}
                                className="loginFont"
                                bgColor="white"
                                color="#2f0505"
                                borderRadius={"3px"}
                                width="210px"
                                minHeight="45px"
                            >
                                <Box fontSize="24px" paddingRight="5px" paddingTop="5px">
                                    <ion-icon name="logo-google"></ion-icon>
                                </Box>
                                Sign in with Google
                            </Button>
                        </Box>
                        <Button onClick={login}>Login</Button>
                    </VStack>
                </Box>
            </HStack>
            <Center>
                {auth.currentUser ? (
                    <Button onClick={logout}>Logout</Button>
                ) : (
                    <Box></Box>
                )}
                {error !== "" && <Text color="red">{error} </Text>}
            </Center>
        </Box>
    );
}

export default LoginPage;