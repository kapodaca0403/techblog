const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize");
session.Store;

const routes = require(".controllers");
const sequelize = require(".config/connection");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencode({ extended: true }));
app.use(expresss.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now Listening"));
});
