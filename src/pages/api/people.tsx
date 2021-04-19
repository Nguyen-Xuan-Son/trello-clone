import { NextApiRequest, NextApiResponse } from "next";

export default function getPeople(req: NextApiRequest, res: NextApiResponse) {
  res.json({
    content: ["Nguyen thi Xuan", "Nguyen thi Hoa", "Nguyen Buoi"],
    message: "Get people successfully!",
  });
}
