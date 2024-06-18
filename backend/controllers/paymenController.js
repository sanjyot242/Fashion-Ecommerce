import { instance } from '../index';
import crypto from 'crypto';

export const createOrder = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amout * 100),
      currency: 'INR',
      receipt: 'Dynamic receipt Number',
    };
    const order = await instance.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ message: 'Encountered an error' });
  }
};
