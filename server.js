const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const port = process.env.PORT || 80 || 3001 ;
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('dotenv').config();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://forex-data-feed.swissquote.com/public-quotes/"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json());

const corsOptions = {
    origin: [
        // `http://localhost:3000`, 
        `https://tabulaaurea.herokuapp.com`],
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(session({
    store: new MongoStore({ url: (
        process.env.MONGODB_URI || 
        "mongodb://localhost:27017/proj4")}),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000
    }
}))

// API routes  -- Needs updating
app.use('/auth', routes.auth)
app.use('/incomes', routes.incomes)
app.use('/expenses', routes.expenses)
app.use('/assets', routes.assets)
app.use('/liabilities', routes.liabilities)
app.use('/goals', routes.goals)
app.use('/wishlist', routes.wishlist)
app.use('/gold', routes.gold)
app.use('/silver', routes.silver)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
