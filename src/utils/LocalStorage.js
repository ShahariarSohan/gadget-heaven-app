
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
export { addCart, getCart, getWishlist, addWishlist }