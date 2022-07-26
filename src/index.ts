import express from 'express';
import diaryRouter from './routes/diaries'
import authRouter from './routes/auth'

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use('/auth/', authRouter);
app.use('/diary', diaryRouter);

app.listen(PORT, () => {
   console.log(`Server on running on port ${PORT}`);
});