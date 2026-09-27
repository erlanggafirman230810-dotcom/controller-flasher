let bleDevice = null;
let bleServer = null;
let bleService = null;
let bleCharacteristic = null;


async function connectBLE(){

    try{

        bleDevice = await navigator.bluetooth.requestDevice({

            filters:[
                {
                    name:
                    BLE_CONFIG.deviceName
                }
            ],

            optionalServices:[
                BLE_CONFIG.serviceUUID
            ]

        });


        bleServer =
        await bleDevice.gatt.connect();


        bleService =
        await bleServer.getPrimaryService(
            BLE_CONFIG.serviceUUID
        );


        bleCharacteristic =
        await bleService.getCharacteristic(
            BLE_CONFIG.characteristicUUID
        );


        console.log("BLE CONNECTED");


        if(typeof updateBLEStatus === "function"){
            updateBLEStatus("Connected");
        }


        return true;


    }catch(error){


        console.log(
            "BLE ERROR:",
            error
        );


        if(typeof updateBLEStatus === "function"){
            updateBLEStatus("Failed");
        }


        return false;

    }

}



async function sendCommand(command){


    if(!bleCharacteristic){

        console.log(
            "BLE belum connect"
        );

        return false;

    }


    try{


        let data =
        new TextEncoder()
        .encode(command);



        await bleCharacteristic.writeValue(
            data
        );


        console.log(
            "SEND:",
            command
        );


        return true;



    }catch(error){


        console.log(
            "SEND ERROR:",
            error
        );


        return false;

    }

}



function disconnectBLE(){


    if(
        bleDevice &&
        bleDevice.gatt.connected
    ){

        bleDevice.gatt.disconnect();

    }


    bleCharacteristic = null;
    bleService = null;
    bleServer = null;


    if(typeof updateBLEStatus === "function"){
        updateBLEStatus("Disconnected");
    }


}