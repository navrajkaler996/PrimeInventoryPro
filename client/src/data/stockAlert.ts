interface stockAlertInterface {
    itemName: string,
    code: string,
    department: string,
    onHands: string,
    cap: string,
    required: string
}

export const stockAlert:stockAlertInterface[] = [
    {
        "itemName": "Chicken wings",
        "code": "010103",
        "department": "Meats",
        "onHands": "30",
        "cap": "50",
        "required": "20"
    },
    {
        "itemName": "Ground Beef",
        "code": "010201",
        "department": "Meats",
        "onHands": "40",
        "cap": "60",
        "required": "20"
    },
    {
        "itemName": "Pork Chops",
        "code": "010301",
        "department": "Meats",
        "onHands": "25",
        "cap": "45",
        "required": "20"
    },
    {
        "itemName": "Salmon Fillet",
        "code": "010401",
        "department": "Meats",
        "onHands": "20",
        "cap": "30",
        "required": "10"
    },
    {
        "itemName": "Ribeye Steak",
        "code": "010501",
        "department": "Meats",
        "onHands": "35",
        "cap": "55",
        "required": "20"
    },
    {
        "itemName": "Turkey Breast",
        "code": "010601",
        "department": "Meats",
        "onHands": "15",
        "cap": "25",
        "required": "10"
    },
    {
        "itemName": "Lamb Chops",
        "code": "010701",
        "department": "Meats",
        "onHands": "10",
        "cap": "20",
        "required": "10"
    },
    {
        "itemName": "Bacon",
        "code": "010801",
        "department": "Meats",
        "onHands": "40",
        "cap": "50",
        "required": "10"
    }
]
