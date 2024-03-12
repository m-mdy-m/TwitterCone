// Importing the Xprz framework module
const Xprz = require("xprz");
// Creating a new instance of the Xprz framework
const { App, Package } = new Xprz();
new Package().dotenv().setupDot();
// Destructuring commonly used methods from the App instance
const { use, launch, loadRoutes, setTemplateEngine, useJsonBody, static } =
  new App();
launch(); // Launching the server
useJsonBody(); // Parsing JSON request bodies
setTemplateEngine().ejs(); // set template engine ejs
const cookieParser = $install('cookie-parser')
use(cookieParser())
$read("middleware/setup");
use($read("middleware/user"));
use($read("middleware/locals"));
$read("utils/database"); // Loading database utility
loadRoutes("routes"); // Loading routes from the 'routes' directory
