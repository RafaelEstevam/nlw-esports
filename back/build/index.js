import express from 'express';
const app = express();
app.get('/', (req, res) => {
    return res.json({ "message": "Hello world" });
});
app.listen(8081, () => {
    console.log("Server Open");
});
