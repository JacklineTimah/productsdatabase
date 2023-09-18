const { createProducts, getAllProducts } = require('../services/products.service');

const newProduct = async (req, res, next) => {
    try {
        const result = await createProducts(req.body);
        return res.status(result.code).json(result);
    } catch (error) {
        next(error);
    }
};

const retrieveAllProducts = async (req, res, next) => {
    try {
        const result = await getAllProducts();
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    newProduct,
    retrieveAllProducts
};

