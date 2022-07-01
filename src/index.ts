import express from 'express';
const app = express();
app.use(express.json());

const PORT = 5001;

app.get('/api', (_, res) => {
   console.log('=> /api');
   res.send('Test api');
});

app.listen(PORT, () => {
   console.log(`Server on runningon port ${PORT}`);
});