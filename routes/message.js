const router = express.Router();
const ctrl = require('../controllers/');

router.get('/', ctrl.message.index);

module.exports = router;