import { NextApiHandler } from "next"
import { ReqBody, ResBody } from "alice-types"

const handleAlice: NextApiHandler = (req, res) => {
    if (req.method !== "POST") {
        res.status(504).end()
        return;
    }

    const body: ReqBody = req.body

    console.log(JSON.stringify(req.body, null, 2))

    const command = body.request.command

    const response: ResBody = {
        version: "1.0",
        response: {
            text: command,
            end_session: false,
        },
    }

    res.json(response);
}

export default handleAlice;
