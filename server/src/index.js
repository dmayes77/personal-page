import 'babel-polyfill';
import { join } from 'path';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import stateRouting from './middleware/routing.mw';
import configurePassport from './config/passport';
import { mongoURI as db} from './config/keys';

const CLIENT_PATH = join(__dirname, '../../client');

let app = express();

app.use(morgan('dev'));
app.use(express.static(CLIENT_PATH));
app.use(express.json());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.set('debug', true);
mongoose
	.connect(
		db,
		{ useNewUrlParser: true }
	)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

configurePassport(app);

app.use('/api', routes);

app.use(stateRouting);

let port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
