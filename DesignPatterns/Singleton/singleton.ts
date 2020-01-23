class SingleObejct {
    
    private static instance: SingleObejct = new SingleObejct();

    private constructor() {}

    public static getInstance(): SingleObejct {
        return this.instance;
    }

    public ShowMessage() {
        console.log('Hello World');
    }
}

var singleObject: SingleObejct = SingleObejct.getInstance();

singleObject.ShowMessage();