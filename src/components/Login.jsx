import React from "react";

const Login = () => {
    // const handleLogin = () => {
    //     // check if correct details the  navigate to home :

    //     // else enter correct details specific for user or pass. if user doesnt exist the ask for signup
    // }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const usersDB = [
        { username: 'user1', password: 'pass1' },
        { username: 'user2', password: 'pass2' },
        // Add more users as needed
    ];

    const validateCredentials = (username, password) => {
        const user = usersDB.find((user) => user.username === username);
        if (!user) {
            return 'User does not exist. Please sign up.';
        }
        if (user.password !== password) {
            return 'Incorrect password. Please try again.';
        }
        return '';
    };

    const onLogin = () => {
        const errorMessage = validateCredentials(username, password);
        if (errorMessage) {
            setError(errorMessage);
        } else {
            navigate('/home'); // Navigate to home page after successful login
        }
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form>
                    <input type="email" placeholder="Email" className="border p-2 w-full mb-3"/>
                    <input type="password" placeholder="Password" className="border p-2 w-full mb-3"/>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
