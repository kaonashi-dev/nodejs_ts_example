import express from 'express';
import diaryRouter from './routes/diaries'

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use('/api/', diaryRouter);

app.listen(PORT, () => {
   console.log(`Server on runningon port ${PORT}`);
});