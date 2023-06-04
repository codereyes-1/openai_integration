import { Configuration, OpenAIApi } from "openai";
// import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Style, Text, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import 'react-native-url-polyfill/auto'


const configuration = new Configuration({
    organization: "org-NfnzMdZC376elOpp2vezW2Vn",
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const Main = () => {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const prompt1 = 'rewrite this as a haiku, a tiny bit poetic, and in a way this child friendly: '

    const handleInput = async () => {
        try {
            const userInput = prompt1 + input;
            // const url = new URL(userInput);
            // const userInput = prompt + input
            // createCompletion http call to api and get the response 
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: `You: ${userInput}\nAI:`,
                temperature: 0.2,
                max_tokens: 30,
                top_p: 1.0,
                frequency_penalty: 0.5,
                presence_penalty: 0.0,
                stop: ['You']
            })
            // use setOutput method from react state to be equal to the response object
            // call data object of the response, nav to choices array, get first element of array and convert it to text. 
            setOutput(response.data.choices[0].text)
        } catch (error) {
            console.log(error)
        }
    } 

    // setInput('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TreePoetryApp</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message here"
                    onChangeText={setInput}
                    value={input}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleInput}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.outPutContainer}>
                {/* <Text style={styles.output}>{output}</Text> */}
                <TouchableOpacity style={styles.outputContainer} onPress={handleInput}>
                    <Text style={styles.output}>{output}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    chatContainer: {
        width: '90%',
        height: '70%',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#F2F2F2',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginight: 10,
        backgroundColor: '#fff',
    },
    sendButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 20,
    },
    sendButtontext: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    outputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // flex: 0,
        padding: 10,
        fontSize: 200,
        backgroundColor: '#71F6F3',
        borderRadius: 20
    },
})

export default Main

// import { Configuration, OpenAIApi } from "openai";
// import { Style, Text, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
// import React, { useState } from "react";


// const configuration = new Configuration({
//     organization: "org-NfnzMdZC376elOpp2vezW2Vn",
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const Main = () => {
//     const [input, setInput] = useState('');
//     const [output, setOutput] = useState('');
//     const prompt = 'rewrite this as a haiku, a tiny bit poetic, and in a way this child friendly: ';

//     const handleInput = async () => {
//         try {
//             const userInput = prompt + input;
//             const urlParams = new URLSearchParams();
//             urlParams.set('model', 'text-davinci-003');
//             urlParams.set('prompt', `You: ${userInput}\nAI:`);
//             urlParams.set('temperature', '0.2');
//             urlParams.set('max_tokens', '30');
//             urlParams.set('top_p', '1.0');
//             urlParams.set('frequency_penalty', '0.5');
//             urlParams.set('presence_penalty', '0.0');
//             urlParams.set('stop', 'You');

//             const response = await openai.createCompletion(urlParams.toString());
//             setOutput(response.data.choices[0].text);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>TreePoetryApp</Text>
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Type your message here"
//                     onChangeText={setInput}
//                     value={input}
//                 />
//                 <TouchableOpacity style={styles.sendButton} onPress={handleInput}>
//                     <Text style={styles.sendButtonText}>Send</Text>
//                 </TouchableOpacity>
//                 <View style={styles.outputContainer}>
//                     <Text style={styles.output}>{output}</Text>
//                 </View>
//             </View>
//         </View>
//     );
// };

// import { Configuration, OpenAIApi } from "openai";
// import { Style, Text, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
// import React, { useState } from "react";

// const configuration = new Configuration({
//     organization: "org-NfnzMdZC376elOpp2vezW2Vn",
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const Main = () => {
//     const [input, setInput] = useState('');
//     const [output, setOutput] = useState('');
//     const prompt = 'rewrite this as a haiku, a tiny bit poetic, and in a way this child friendly: ';

//     const handleInput = async () => {
//         try {
//             const userInput = prompt + input;
//             const queryParams = `model=text-davinci-003&prompt=You%3A%20${encodeURIComponent(userInput)}%0AAI%3A&temperature=0.2&max_tokens=30&top_p=1.0&frequency_penalty=0.5&presence_penalty=0.0&stop=You`;

//             const response = await openai.createCompletion(`?${queryParams}`);
//             setOutput(response.data.choices[0].text);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>TreePoetryApp</Text>
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Type your message here"
//                     onChangeText={setInput}
//                     value={input}
//                 />
//                 <TouchableOpacity style={styles.sendButton} onPress={handleInput}>
//                     <Text style={styles.sendButtonText}>Send</Text>
//                 </TouchableOpacity>
//                 <View style={styles.outputContainer}>
//                     <Text style={styles.output}>{output}</Text>
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center',
//         },
//         title: {
//             fontSize: 24,
//             fontWeight: 'bold',
//             marginBottom: 20,
//         },
//         chatContainer: {
//             width: '90%',
//             height: '70%',
//             borderWidth: 1,
//             borderRadius: 10,
//             overflow: 'hidden',
//         },
//         inputContainer: {
//             flexDirection: 'row',
//             alignItems: 'center',
//             padding: 10,
//             backgroundColor: '#F2F2F2',
//         },
//         input: {
//             flex: 1,
//             height: 40,
//             borderWidth: 1,
//             borderRadius: 20,
//             padding: 10,
//             marginight: 10,
//             backgroundColor: '#fff',
//         },
//         sendButton: {
//             backgroundColor: '#2196F3',
//             padding: 10,
//             borderRadius: 20,
//         },
//         sendButtontext: {
//             color: '#fff',
//             fontWeight: 'bold',
//             textAlign: 'center',
//         },
//         outputContainer: {
//             flex: 1,
//             padding: 10,
//             fontSize: 16
//         },
// });

// export default Main;


// npm i -D babel-plugin-react-native-web webpack webpack-cli webpack-dev-server html-webpack-plugin react-dom babel-loader url-loader @svgr/webpack