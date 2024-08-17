import Heading from './components/Heading';
import Button from './components/Button';

// function App() {
//     const isLogin = true;
//     const text_login = "Login";
//     const text_logout = "Logout";

//     if (!isLogin) {
//         return <h1>{text_login}</h1> 
//     } else {
//         return <h1>{text_logout}</h1>
//     }
// };

function App() {
    return (
        <>
            <Heading>Heading Text</Heading>
            <Button></Button>
            <Button title='Login' />
            <Button title='Logout' />
            <br />
            <Button title = "Red Button" color='red' />
            <Button title = "Blue Button" color='blue' />
            <Button title = "Green Button" color='green' />

        </>
    );
}

export default App;
