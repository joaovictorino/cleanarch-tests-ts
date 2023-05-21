import { NextApiRequest, NextApiResponse } from "next";
import { Account } from "@bank/core/model/account";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const account = new Account();
  res.status(200).json({ valor: account.transfer() });
}
