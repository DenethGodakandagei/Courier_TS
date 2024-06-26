import { Router } from 'express';
import InternationalController from '../controllers/international.controller'
import domesticController from '../controllers/domestic.controller'
import contactsController from '../controllers/contacts.controller'
import { register, login } from '../controllers/admin.controller'; 
import {validatecontact, validateCreate, validateGetOrderById, validateAdminlogin} from '../validators/validators'

const router = Router();

// Define routes
router.post('/international', validateCreate, InternationalController.create);
router.get('/international', InternationalController.getAll);
router.get('/international/:id',validateGetOrderById ,  InternationalController.get);
router.post('/domestic',validateCreate,  domesticController.createOrder);
router.get('/domestic', domesticController.getAllOrders);
router.get('/domestic/:id', validateGetOrderById , domesticController.getOrderById);
router.post('/register', register);
router.post('/login', validateAdminlogin, login);
router.post('/contact',validatecontact, contactsController.createContact );
router.get('/contact', contactsController.getAllContacts );  

export default router;

