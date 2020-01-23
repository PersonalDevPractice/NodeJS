interface IPhone {
    useLightening();
}

interface Android {
    useMicroUSB();
}

class iPhone7 implements IPhone {
    useLightening() {
        console.log("Using lightning port...");
    }
}

class GooglePixel implements Android {
    useMicroUSB() {
        console.log('Using micro USB...')
    }
}

class LightningToMicroUSBAdapter implements Android {
    iphoneDevice: IPhone;
    
    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone;
    }

    public useMicroUSB() {
        console.log('want to use MicroUSB, converting to Lightning...');
        this.iphoneDevice.useLightening();
    }
}

let iphone = new iPhone7();
let chargeAdapter = new LightningToMicroUSBAdapter(iphone);

chargeAdapter.useMicroUSB();