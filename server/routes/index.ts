import { Router } from 'express';
import InternationalController from '../controllers/internationalController'
import domesticController from '../controllers/domesticController'
import contactsController from '../controllers/ContactsController'
import { register, login } from '../controllers/adminController'; 

const router = Router();+
-

// Define routes
router.post('/international', InternationalController.createInternationalOrder);
router.get('/international', InternationalController.getAllInternationalOrders);
router.get('/international/:id', InternationalController.getInternationalOrderById);
router.post('/domestic', domesticController.createOrder);
router.get('/domestic', domesticController.getAllOrders);
router.get('/domestic/:id', domesticController.getOrderById);
router.post('/register', register);
router.get('/login', login);
router.post('/contact', contactsController.createContact );
router.get('/contact', contactsController.getAllContacts );  

export default router;

