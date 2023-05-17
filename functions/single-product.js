const dotenv = require('dotenv')
dotenv.config()
const Airtable = require('airtable-node')
const airtable = new Airtable({apiKey: 'keyiHgLk9UwY7sUmX'}).base('appPKCb7ogQoNgrUX').table('products')
exports.handler = async function(event, context) {
const {id} = event.queryStringParameters
if (id) {
    try {
        let product = await airtable.retrieve(id)
        if (product.error) {
            return {
                statusCode: 404,
                body: `no product with id : ${id}`
            }
        }
        product = {id: product.id, ...product.fields}
        return {
            statusCode: 200,
            body: JSON.stringify(product)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: 'server error'
        }
    }
}
}