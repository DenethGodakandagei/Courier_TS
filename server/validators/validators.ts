import { body, param } from 'express-validator';
export const validateCreate = [
    body('weight').isFloat({ min: 0 }).withMessage('Weight must be a positive number'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('sendername').isString().notEmpty().withMessage('Sender name is required'),
    body('sendernumber').isString().isLength({ min: 10}).withMessage('Sender number must be valid'),
    body('senderaddress').isString().notEmpty().withMessage('Sender address is required'),
    body('receivername').isString().notEmpty().withMessage('Receiver name is required'),
    body('receivernumber').isString().isLength({ min: 10}).withMessage('Receiver number must be valid'),
    body('receiveraddress').isString().notEmpty().withMessage('Receiver address is required')
  ];

export const validateGetOrderById = [
    param('id').isMongoId().withMessage('Invalid Order ID')
  ];

export const validateAdminlogin =[
    body('email').isString().notEmpty().withMessage('Admin email is required'),
    body('password').isString().notEmpty().withMessage('Admin password is required')
]  ;


export const validatecontact =[
    body('name').isString().notEmpty().withMessage('Name is required'),
    body('email').isEmail().notEmpty().withMessage('email must be valid'),
    body('message').isString().notEmpty().withMessage(' MessageS is required')
]  ;