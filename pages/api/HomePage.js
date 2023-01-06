import fs from "fs";
import path from "path";
function handler(req, res) {
  if (req.method === "GET") {
    const filepath = path.join(process.cwd(), "data", "HomePage.json");
    const fileData = fs.readFileSync(filepath);
    const data = JSON.parse(fileData);
    console.log(data);
    return res.status(200).json({ message: data });
  }
}
export default handler;
