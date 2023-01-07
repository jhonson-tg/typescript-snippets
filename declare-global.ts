// This is to add variable into global or window list
declare global {
    var app: {
        create(): void;
    }
}

app.create()
window.app.create()


// This is to add variable into window interface which already exists

declare global {
    interface Window {
        test: {
            delete(): void;
        }
    }
}

window.test.delete()
export { }