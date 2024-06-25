import { Request, Response } from 'express';
import {International} from '../models/International.models'; 
import { validationResult } from 'express-validator';

class InternationalController {
  // Method to create a new international order
  public async create(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       res.status(400).json({ errors: errors.array() });
    }

    try {
      const newOrder = {
        weight: req.body.weight,
        price: req.body.price,
        sendername: req.body.sendername,
        sendernumber: req.body.sendernumber,
        senderaddress: req.body.senderaddress,
        receivername: req.body.receivername,
        receivernumber: req.body.receivernumber,
        receiveraddress: req.body.receiveraddress,
      };
  
      const order = await International.create(newOrder);
      const createdId = order.id;
  
      res.status(201).send({ id: createdId, ...order.toJSON() });
    } catch (error) {
      console.error('Error creating international order:', error);
      res.status(500).send({ message: 'Error creating order', error });
    }
  }

 // Method to get all international orders
public async getAll(req: Request, res: Response): Promise<void> {
  

    try {
      const orders = await International.find({});
      res.status(200).json(orders);
    } catch (error) {
      console.error('Error fetching international orders:', error); // Enhanced logging
      res.status(500).send({ message: 'Error fetching international orders', error });
    }
  }
  
  // Method to get an international order by ID
  public async get(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
     res.status(400).json({ errors: errors.array() });
  }
    try {
      const { id } = req.params;
      const order = await International.findById(id);

      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).send({ message: 'Order not found' });
      }
    } catch (error) {
      console.log({ message: '  error', error });
      res.status(500).send({ message: 'Error ', error });
    }
  }
}

export default new InternationalController();
