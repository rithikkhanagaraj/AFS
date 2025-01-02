//Task 1(for Each)
const product = {
    id: 101,
    name: "Laptop",
    price: 1500,
    inStock: true
};
Object.entries(product).forEach(([key, value]) => {
    console.log(key,":",value);
});
//Task 2(InstaExample using Promise)
async function likeCode() {
    return new Promise((resolve) => {
        resolve("Liked the post Successfully.");
    });
}
async function commentCode() {
    return new Promise((resolve) => {
        resolve("Comment posted Successfully in the post.");
    });
}
async function createPost() {
    return new Promise((resolve) => {
        resolve("Post Created Successfully.");
    });
}
async function shareCode() {
    return new Promise((resolve) => {
        resolve("Post shared Successfully.");
    });
}
async function unshareCode() {
    return new Promise((resolve, reject) => {
        const error = true; 
        if (error) {
            reject("Failed to unshare the post.");
        } else {
            resolve("Post unshared Successfully.");
        }
    });
}
async function unpostCode() {
    return new Promise((resolve, reject) => {
        const error = true; 
        if (error) {
            reject("Failed to delete the post.");
        } else {
            resolve("Post deleted Successfully.");
        }
    });
}
async function unlikeCode() {
    return new Promise((resolve, reject) => {
        const error = true; 
        if (error) {
            reject("Failed to unlike the post.");
        } else {
            resolve("Unliked the post Successfully.");
        }
    });
}
async function uncommentCode() {
    return new Promise((resolve, reject) => {
        const error = true; 
        if (error) {
            reject("Failed to remove the comment.");
        } else {
            resolve("Comment removed Successfully.");
        }
    });
}
async function handlePostActions() {
    try {
        var [post, comment, like, share, unshare, unpost, unlike, uncomment] = await Promise.all([
            createPost(),
            commentCode(),
            likeCode(),
            shareCode(),
            unshareCode(), 
            unpostCode(),
            unlikeCode(), 
            uncommentCode(), 
        ]);
        console.log(post);
        console.log(comment);
        console.log(like);
        console.log(share);
        console.log(unshare);
        console.log(unpost);
        console.log(unlike);
        console.log(uncomment);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
handlePostActions();
