const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const port = process.env.PORT || 3001;
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(express.json());

const corsOptions = {
    origin: [`http://localhost:3000`],
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(session({
    store: new MongoStore({ url: "mongodb://localhost:27017/proj4" }),
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000
    }
}))

// API routes  -- Needs updating
app.use('/auth', routes.auth)
// app.use('/month', routes.month)
app.use('/incomes', routes.incomes)
app.use('/expenses', routes.expenses)
app.use('/assets', routes.assets)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
