
// store cart 
const getCart = () => {
    const storedCart = localStorage.getItem("carts")
    if (storedCart) {
        return JSON.parse(storedCart)
    }
    return []
}
const addCart = (cart) => {
    const carts = getCart();
    carts.push(cart)
    localStorage.setItem("carts", JSON.stringify(carts))
}

const deleteCart = (id) => {
    const carts = getCart();
    const filteredCart = carts.filter((cart) => cart.product_id !== id)
    localStorage.setItem("carts", JSON.stringify(filteredCart))
}
// store wishlist
const getWishlist = () => {
    const storedList = localStorage.getItem("wishlists")
    if (storedList) {
        return JSON.parse(storedList)
    }
    return []
}
const addWishlist = (wishlist) => {
    const wishlists = getWishlist();
    wishlists.push(wishlist)
    localStorage.setItem("wishlists", JSON.stringify(wishlists))
}
const deleteWishlist = (id) => {
    const wishlists = getWishlist();
    const filteredWishlist = wishlists.filter((wishlist) => wishlist.product_id !== id)
    localStorage.setItem("wishlists", JSON.stringify(filteredWishlist))
}
export { addCart, getCart, getWishlist, addWishlist, deleteCart, deleteWishlist }