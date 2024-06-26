import { Request, Response } from 'express';
import {Domestic} from '../models/Domestic.models'; 
import { validationResult } from 'express-validator';

class DomesticController {
  // Method to create a new domestic order
  public async createOrder(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       res.status(400).json({ errors: errors.array() });
       return;
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

      const order = await Domestic.create(newOrder);
      const createdId = order.id;

      res.status(201).send({ id: createdId, ...order.toJSON() });
    } catch (error) {
      console.error('Error creating domestic order:', error);
      res.status(500).send({ message: 'Error creating order', error });
    }
  }

  // Method to get all domestic orders
  public async getAllOrders(req: Request, res: Response): Promise<void> {
   

    try {
      const orders = await Domestic.find({});
      res.status(200).json(orders);
    } catch (error) {
      console.error('Error fetching all orders:', error);
      res.status(500).send({ message: 'Error fetching orders', error });
    }
  }

  // Method to get a domestic order by ID
  public async getOrderById(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       res.status(400).json({ errors: errors.array() });
       return;
    }
    try {
      const { id } = req.params;
      const order = await Domestic.findById(id);

      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).send({ message: 'Order not found' });
      }
    } catch (error) {
      console.error('Error fetching order by ID:', error);
      res.status(500).send({ message: 'Error fetching order by ID', error });
    }
  }
}

export default new DomesticController();
