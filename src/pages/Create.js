import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {createUserProfileDocument} from "../Firebase/CreateNewProfile";


import {
    Box,
    Button,
    Center,
    Text,
    VStack,
    HStack,
    FormLabel,
    FormControl,
    Input,
    FormHelperText,
    Select,

} from "@chakra-ui/react";


export default function Create({user}) {
    const [grade, setGrade] = useState("");
    const [SAT, setSAT] = useState("");
    const [ACT, setACT] = useState("");
    const [GPA, setGPA] = useState("");
    const [EC1Name, setEC1Name] = useState("");
    const [EC1Role, setEC1Role] = useState("");
    const [EC1Description, setEC1Description] = useState("");
    const [EC2Name, setEC2Name] = useState("");
    const [EC2Role, setEC2Role] = useState("");
    const [EC2Description, setEC2Description] = useState("");
    const [EC3Name, setEC3Name] = useState("");
    const [EC3Role, setEC3Role] = useState("");
    const [EC3Description, setEC3Description] = useState("");
    const [EC4Name, setEC4Name] = useState("");
    const [EC4Role, setEC4Role] = useState("");
    const [EC4Description, setEC4Description] = useState("");
    const [EC5Name, setEC5Name] = useState("");
    const [EC5Role, setEC5Role] = useState("");
    const [EC5Description, setEC5Description] = useState("");
    const [EC6Name, setEC6Name] = useState("");
    const [EC6Role, setEC6Role] = useState("");
    const [EC6Description, setEC6Description] = useState("");
    const [EC7Name, setEC7Name] = useState("");
    const [EC7Role, setEC7Role] = useState("");
    const [EC7Description, setEC7Description] = useState("");
    const [EC8Name, setEC8Name] = useState("");
    const [EC8Role, setEC8Role] = useState("");
    const [EC8Description, setEC8Description] = useState("");
    const [EC9Name, setEC9Name] = useState("");
    const [EC9Role, setEC9Role] = useState("");
    const [EC9Description, setEC9Description] = useState("");
    const [EC10Name, setEC10Name] = useState("");
    const [EC10Role, setEC10Role] = useState("");
    const [EC10Description, setEC10Description] = useState("");
    const [numECs, setNumECs] = useState(1);
    const [APs, setAPs] = useState(0);


    function create() {
        createUserProfileDocument(user, {
            grade: grade,
            SAT: SAT,
            ACT: ACT,
            GPA: GPA,
            EC1Name: EC1Name,
            EC1Role: EC1Role,
            EC1Description: EC1Description,
            EC2Name: EC2Name,
            EC2Role: EC2Role,
            EC2Description: EC2Description,
            EC3Name: EC3Name,
            EC3Role: EC3Role,
            APs: APs,


        }).then(() => {
            console.log('done');
            window.location.replace(`/`);

        });
    }


    return (
        <Box color={'brand.900'}>
            <Center>
                <Box width={'50%'}>

                    <HStack>
                        <Box>
                            <FormControl id="grade" isRequired>
                                <FormLabel>Grade</FormLabel>

                                <Select minW={'150px'} placeholder="Grade" onChange={(e) => setGrade(e.target.value)}>
                                    <option value="9">9th</option>
                                    <option value="10">10th</option>
                                    <option value="11">11th</option>
                                    <option value="12">12th</option>
                                </Select>


                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl id="SAT">
                                <FormLabel>SAT</FormLabel>
                                <Select minW={'150px'} placeholder="SAT score" onChange={(e) => setSAT(e.target.value)}>>
                                    <option value={"400-500"}>400-500</option>
                                    <option value={"500-600"}>500-600</option>
                                    <option value={"600-700"}>600-700</option>
                                    <option value={"700-800"}>700-800</option>
                                    <option value={"800-900"}>800-900</option>
                                    <option value={"900-1000"}>900-1000</option>
                                    <option value={"1000-1100"}>1000-1100</option>
                                    <option value={"1100-1200"}>1100-1200</option>
                                    <option value={"1200-1300"}>1200-1300</option>
                                    <option value={"1300-1400"}>1300-1400</option>
                                    <option value={"1400-1500"}>1400-1500</option>
                                    <option value={"1500-1600"}>1500-1600</option>
                                </Select>

                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl id="ACT">
                                <FormLabel>ACT</FormLabel>
                                <Select minW={'150px'} placeholder="ACT score" onChange={(e) => setACT(e.target.value)}>>
                                    <option value={"1"}>1</option>
                                    <option value={"2"}>2</option>

                                    <option value={"3"}>3</option>
                                    <option value={"4"}>4</option>
                                    <option value={"5"}>5</option>
                                    <option value={"6"}>6</option>
                                    <option value={"7"}>7</option>
                                    <option value={"8"}>8</option>
                                    <option value={"9"}>9</option>
                                    <option value={"10"}>10</option>
                                    <option value={"11"}>11</option>
                                    <option value={"12"}>12</option>
                                    <option value={"13"}>13</option>
                                    <option value={"14"}>14</option>
                                    <option value={"15"}>15</option>
                                    <option value={"16"}>16</option>
                                    <option value={"17"}>17</option>
                                    <option value={"18"}>18</option>
                                    <option value={"19"}>19</option>
                                    <option value={"20"}>20</option>
                                    <option value={"21"}>21</option>
                                    <option value={"22"}>22</option>
                                    <option value={"23"}>23</option>
                                    <option value={"24"}>24</option>
                                    <option value={"25"}>25</option>
                                    <option value={"26"}>26</option>
                                    <option value={"27"}>27</option>
                                    <option value={"28"}>28</option>
                                    <option value={"29"}>29</option>
                                    <option value={"30"}>30</option>
                                    <option value={"31"}>31</option>
                                    <option value={"32"}>32</option>
                                    <option value={"33"}>33</option>
                                    <option value={"34"}>34</option>
                                    <option value={"35"}>35</option>
                                    <option value={"36"}>36</option>


                                </Select>
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl id="GPA">
                                <FormLabel>GPA</FormLabel>
                                <Select minW={'150px'} placeholder="GPA" onChange={(e) => setGPA(e.target.value)}>>
                                    <option value={"0.0-0.5"}>0.0-0.5</option>
                                    <option value={"0.5-1.0"}>0.5-1.0</option>
                                    <option value={"1.0-1.5"}>1.0-1.5</option>
                                    <option value={"1.5-2.0"}>1.5-2.0</option>
                                    <option value={"2.0-2.5"}>2.0-2.5</option>
                                    <option value={"2.5-3.0"}>2.5-3.0</option>
                                    <option value={"3.0-3.5"}>3.0-3.5</option>
                                    <option value={"3.5-4.0"}>3.5-4.0</option>

                                </Select>
                            </FormControl>

                        </Box>
                        <Box>
                            <FormControl id="APs">
                                <FormLabel>APs</FormLabel>
                                <Select minW={'100px'} placeholder="APs" onChange={(e) => setAPs(e.target.value)}>>
                                    <option value={"0"}>0</option>
                                    <option value={"1"}>1</option>
                                    <option value={"2"}>2</option>
                                    <option value={"3"}>3</option>
                                    <option value={"4"}>4</option>
                                    <option value={"5"}>5</option>
                                    <option value={"6"}>6</option>
                                    <option value={"7"}>7</option>
                                    <option value={"8"}>8</option>
                                    <option value={"9"}>9</option>
                                    <option value={"10"}>10</option>
                                </Select>
                            </FormControl>

                        </Box>


                    </HStack>
                    <VStack alignItems={'align-start'}>
                        {numECs > 0 &&
                            <Box pt={10}>
                                <FormControl id="ec1">
                                    <FormLabel>Activity 1</FormLabel>
                                    <FormHelperText>Position/Leadership description</FormHelperText>

                                    <Input onChange={(e) => setEC1Role(e.target.value)}/>
                                    <FormHelperText>Organization Name</FormHelperText>
                                    <Input onChange={(e) => setEC1Name(e.target.value)}/>
                                    <FormHelperText>Describe this activity, including what your
                                        accomplished and any recognition you received, etc.</FormHelperText>
                                    <Input onChange={(e) => setEC1Description(e.target.value)}/>
                                </FormControl>
                            </Box>
                        }
                        {numECs > 1 &&
                            <Box pt={10}>
                                <FormControl id="ec2">
                                    <FormLabel>Activity 2</FormLabel>
                                    <FormHelperText>Position/Leadership description</FormHelperText>

                                    <Input onChange={(e) => setEC2Role(e.target.value)}/>
                                    <FormHelperText>Organization Name</FormHelperText>
                                    <Input onChange={(e) => setEC2Name(e.target.value)}/>
                                    <FormHelperText>Describe this activity, including what your
                                        accomplished and any recognition you received, etc.</FormHelperText>
                                    <Input onChange={(e) => setEC2Description(e.target.value)}/>
                                </FormControl>
                            </Box>
                        }
                        {numECs > 2 &&
                            <Box pt={10}>
                                <FormControl id="ec3">
                                    <FormLabel>Activity 3</FormLabel>
                                    <FormHelperText>Position/Leadership description</FormHelperText>

                                    <Input onChange={(e) => setEC3Role(e.target.value)}/>
                                    <FormHelperText>Organization Name</FormHelperText>
                                    <Input onChange={(e) => setEC3Name(e.target.value)}/>
                                    <FormHelperText>Describe this activity, including what your
                                        accomplished and any recognition you received, etc.</FormHelperText>
                                    <Input onChange={(e) => setEC3Description(e.target.value)}/>
                                </FormControl>
                            </Box>
                        }
                        {numECs > 3 &&
                            <Box pt={10}>
                                <FormControl id="ec4">
                                    <FormLabel>Activity 4</FormLabel>
                                    <FormHelperText>Position/Leadership description</FormHelperText>

                                    <Input onChange={(e) => setEC4Role(e.target.value)}/>
                                    <FormHelperText>Organization Name</FormHelperText>
                                    <Input onChange={(e) => setEC4Name(e.target.value)}/>
                                    <FormHelperText>Describe this activity, including what your
                                        accomplished and any recognition you received, etc.</FormHelperText>
                                    <Input onChange={(e) => setEC4Description(e.target.value)}/>
                                </FormControl>
                            </Box>
                        }
                        {numECs > 4 &&
                            <Box pt={10}>
                                <FormControl id="ec5">
                                    <FormLabel>Activity 5</FormLabel>
                                    <FormHelperText>Position/Leadership description</FormHelperText>

                                    <Input onChange={(e) => setEC5Role(e.target.value)}/>
                                    <FormHelperText>Organization Name</FormHelperText>
                                    <Input onChange={(e) => setEC5Name(e.target.value)}/>
                                    <FormHelperText>Describe this activity, including what your
                                        accomplished and any recognition you received, etc.</FormHelperText>
                                    <Input onChange={(e) => setEC5Description(e.target.value)}/>
                                </FormControl>
                            </Box>

                        }

                    </VStack>

                    <Box pt={5}>
                        <Button w={'100%'} bg={'transparent'} borderColor={'gray'} borderWidth={'1px'}
                                onClick={() => setNumECs(numECs + 1)}>
                            <HStack>
                                <Box>
                                    <ion-icon name="add-circle-outline"></ion-icon>
                                </Box>
                                <Text>
                                    Add another activity
                                </Text>
                            </HStack>
                        </Button>
                    </Box>

                    <Box pt={10} pb={10}>
                        <Button onClick={() => create()} colorScheme="blue" variant="solid">
                            Submit
                        </Button>
                    </Box>

                </Box>
            </Center>
        </Box>
    )
}
