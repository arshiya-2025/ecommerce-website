let userInfo = [{
        id: 1,
        firstName: "xyz",
        lastName: "xyz",
        age: 80,
        dob: "dd/mm/yyyy",
        username: "xyz",
        email: "xyz",
        password: "xyz",
        addToBag: [],
        wishList: [],
    },
    {
        id: 20,
        firstName: "Arshiya",
        lastName: "Ramzan",
        age: 20,
        dob: "11/03/2004",
        username: "Asiya",
        email: "arshiyaramzan@gmail.com",
        password: "asiya",
        addToBag: [],
        wishList: [],
    },
    {

        id: 30,
        firstName: "Aaliya",
        lastName: "Ramzan",
        age: 20,
        dob: "11/03/2004",
        username: "Aaliya",
        email: "aaliyayaramzan@gmail.com",
        password: "aaliya",
        addToBag: [],
        wishList: [],
    }
];

export default userInfo;

export function getUserInfo() {
    return userInfo;
}

// Function to add a category
export function addUserInfo(newCategory) {
    newCategory.id = userInfo.length ? userInfo[userInfo.length - 1].id + 1 : 1;
    userInfo.push(newCategory);
}

// Function to update a category
export function updateUserInfo(id, updatedData) {
    userInfo = userInfo.map(category =>
        category.id === id ? {...category, ...updatedData } : category
    );
}

export function updateWishlist(id, updatedData) {
    let user = userInfo.map(category => {
        if (category.id === id) {
            let wishList = [...category.wishList, updatedData]
            category.wishList = wishList;
            return category
        }
        return category
    });
    userInfo = user;
}

// Function to delete a category
export function deleteUserInfo(id) {
    userInfo = userInfo.filter(category => category.id !== id);
}