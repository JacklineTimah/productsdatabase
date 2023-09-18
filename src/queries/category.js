const addCategory=`
INSERT INTO category(
   name
)
VALUES ($1) RETURNING id, name 
`;
const findCategorybyName =`
SELECT id, name FROM category WHERE name = $1
`;

module.exports={
   addCategory,
   findCategorybyName,
   

}