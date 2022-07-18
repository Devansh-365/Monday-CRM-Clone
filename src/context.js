const { createContext } = require("react");

const CategoriesContext = createContext({
    categories: null,
    setCategories: () => {}
})

export default CategoriesContext