class sdk {
    constructor(public loggedInUserId?: string) { }

    createPost(title: string) {
        this.assertUserLoggedIn();
        // loggedInUserId is string | undefined if asserts this is this & {} not used
        // It should be just string since we are doing the validation in assertUserLoggedIn()
        console.log(this.loggedInUserId, title);
    }

    assertUserLoggedIn(): asserts this is this & {
        loggedInUserId: string
    } {
        if (!this.loggedInUserId) {
            throw new Error("User not logged in..");
        }
    }
}