const Fruits = require('../module/fruits')
exports.add_fruits = async (req, res) => {
    try {
        const { Name , price, description ,energy,vitamins,protein, category,carbohydrates,image} = req.body
        if (!Name) {
            return res.status(400).json({
                status: 'Error',
                Message: "Name is required"
            })
        }
        if (!price) {
            return res.status(400).json({
                status: 'Error',
                Message: "price is required"
            })
        }
        if (!category) {
            return res.status(400).json({
                status: 'Error',
                Message: "category is required"
            })
        }
        let produc = new Fruits({
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
            message:"fruits update successfully"
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