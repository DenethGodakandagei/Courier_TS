import { Request, Response } from 'express';
import {Contacts} from '../models/contact.models'; 
import { validationResult } from 'express-validator';

class ContactsController {
  // Method to create a new contact
  public async createContact(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       res.status(400).json({ errors: errors.array() });
       return;
    }
    try {
      const newContact = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      };

      const contact = await Contacts.create(newContact);

      res.status(201).json(contact);
    } catch (error) {
      console.error('Error creating contact:', error);
      res.status(500).send({ message: 'Error creating contact', error: error });
    }
  }

  // Method to get all contacts
  public async getAllContacts(req: Request, res: Response): Promise<void> {
    
    try {
      const contacts = await Contacts.find({});
      res.status(200).json(contacts);
    } catch (error) {
      console.error('Error fetching all contacts:', error);
      res.status(500).send({ message: 'Error fetching contacts', error: error });
    }
  }
}

export default new ContactsController();
