import UsersPage from "./pages/UsersPage/UsersPage";
function App() {
    return (
        <div className="App">
            <UsersPage />
        </div>
    );
}
export default App;

const cors = require("cors");
app.use(cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

