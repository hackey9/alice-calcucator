import { NextApiHandler } from "next"
import { ReqBody, ResBody } from "alice-types"

type TResponse = ResBody;

const handleAlice: NextApiHandler<TResponse> = (req, res) => {
    const body: ReqBody = req.body

    console.log(req.body)

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
