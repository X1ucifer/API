const Product = require('../module/product_schema')
exports.add_products = async (req, res) => {
    try {
        const { Name,category, price, description,energy,vitamins,protein,carbohydrates,image} = req.body
        if (!Name) {
            return res.status(400).json({
                status: 'Error',
                Message: "Name is required"
            })
        }
        if (!category) {
            return res.status(400).json({
                status: 'Error',
                Message: "category is required"
            })
        }
        if (!price) {
            return res.status(400).json({
                status: 'Error',
                Message: "price is required"
            })
        }
        let produc = new Product({
            Name,
            category,
            price,
            description,
            energy,
            vitamins,
            protein,
            carbohydrates,
            image
        })
        await produc.save()
        res.status(200).json({
            status:'Success',
            message:"Medicine update successfully"
        })
    } catch (err) {
        console.log(`--------------------------------
            ${err}`)
        res.status(400).send({
            status: "Error",
            message: 'Error in server'
        })
    }

}