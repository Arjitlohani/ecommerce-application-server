import 'dotenv/config';
import app from './app.js';
import { environmentConfig } from './config/environment.js';
import { startDatabase } from './utils/database.js';


const port = environmentConfig.port || 8080;

process.on('uncaughtException', (err) => {
    console.log("Error:",err.message)
    
});

process.on('unhandledRejection', (err) => {
    console.log("Error:",err.message)
    
});
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`);
});


startDatabase();

app.get('/', (req, res) => {
    const response =`<center><h2>Ecommerce Application</h2 <p>${new Date()}</p></center>`;
    res.send(response);
});



