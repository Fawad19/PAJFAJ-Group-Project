let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index");
const { route } = require("./survey");

router.get("/", indexController.displayHomepage);

router.get("/home", indexController.displayHomepage);

router.get("templates",indexController.displaytemplatespage);

router.get("/template1/login", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/template1/login", indexController.processLoginPageToTemp1);


router.get("/template2/login", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/template2/login", indexController.processLoginPageToTemp2);

router.get("/template3/login", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/template3/login", indexController.processLoginPageToTemp3);


router.get("/surveylist1/login", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/surveylist1/login", indexController.processLoginPageToSurveyList1);


router.get("/surveylist2/login", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/surveylist2/login", indexController.processLoginPageToSurveyList2);


router.get("/surveylist3/login", indexController.displayLoginPage);
/* POST Route for processing the Login page */
router.post("/surveylist3/login", indexController.processLoginPageToSurveyList3);


/* GET Route for displaying the Register page */
router.get("/login", indexController.displayLoginPage);

/* POST Route for processing the Register page */
router.post("/login", indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get("/register", indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post("/register", indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get("/logout", indexController.performLogout);



/* GET home page. */
router.get("/", indexController.displayHomepage);

/* GET home page. */
router.get("/home", indexController.displayHomepage);

/* GET About Us page. */
router.get("/about", indexController.displayAboutpage);

/* GET Products page. */
router.get("/products", indexController.displayProductspage);

/* get survey 1*/
router.get("/survey1", indexController.displaySurvey1);

/* GET Route for displaying the Login page */
router.get("/login", indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post("/login", indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get("/register", indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post("/register", indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get("/logout", indexController.performLogout);


module.exports = router;
