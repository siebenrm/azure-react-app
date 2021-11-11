import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.res.json ({
        value: "Api message function is working!"
    })
};

export default httpTrigger;