const { addProduct, fetchAllProducts, findProductbyName} = require('../queries/products');
const { runQuery } = require('../config/database.config');

const createProducts = async (body) => {
    const { name, price, quantity } = body;
    const productExist= await runQuery (findProductbyName,[name])
    if (productExist.length > 0){
        console.log(productExist);
        throw{
            code:409,
            message:'Product already exist',
            data:null,
            status:'error'
        }
    } 
    const response = await runQuery(addProduct, [name,price,quantity])
    console.log(response);
    return {
        code: 201,
        status: 'success',
        message: 'New product added successfully',
        data:response
    }
}

/*const fetchAllProducts=`
SELECT 
name, price,quantity_sold,quantity FROM products
`*/
const getAllProducts = async () => {
    try {
        const fetchProducts = await runQuery(fetchAllProducts);
        console.log(fetchProducts);
        return {
            code: 200,
            status: 'success',
            message: 'All Products fetched successfully',
            data: fetchProducts,
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        throw {
            code: 500, 
            status: 'error',
            message: 'Failed to fetch products',
            data: null,
        };
    }
};



module.exports = {
    createProducts,
    getAllProducts
};
