const COMMANDS = {

    MODE_NORMAL:
        "MODE:normal",

    MODE_KONSLET:
        "MODE:konslet",

    MODE_GENIT:
        "MODE:genit",

    MODE_BLITZ:
        "MODE:blitz",

    MODE_PULSE:
        "MODE:pulse",

    MODE_DRUMBAND:
        "MODE:drumband",

    MODE_PRAMUKA:
        "MODE:pramuka",

    MODE_JEDAG:
        "MODE:jedag"

};


function commandSpeed(value){
    return "SPEED:" + value;
}


function commandGenit(value){
    return "GENIT:" + value;
}