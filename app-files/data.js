var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.979688480061295,
        "pitch": 0.11275170762720421,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.7924618958805887,
          "pitch": 0.19232004487745513,
          "rotation": 0,
          "target": "1-entry-inside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entry-inside",
      "name": "Entry-Inside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.9142116468439543,
        "pitch": 0.24803289618796143,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 2.832347473756693,
          "pitch": 0.4644913504742725,
          "rotation": 0,
          "target": "4-expo-entry"
        },
        {
          "yaw": 0.4830383448859834,
          "pitch": 0.22293655509087706,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-heads-message",
      "name": "Heads Message",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.8817665271158006,
        "pitch": 0.40403012266300564,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -2.80358517117838,
          "pitch": 0.7089757878820855,
          "rotation": 0,
          "target": "3-first-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-first-view",
      "name": "First view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.024611196092515,
        "pitch": 0.07344954700078965,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 1.8691237416675692,
          "pitch": 0.3824704343585008,
          "rotation": 0,
          "target": "2-heads-message"
        },
        {
          "yaw": 1.4148266838855665,
          "pitch": 0.20361341910802722,
          "rotation": 0,
          "target": "1-entry-inside"
        },
        {
          "yaw": -2.624600257977683,
          "pitch": 0.4297454862202432,
          "rotation": 0,
          "target": "6-genesis"
        },
        {
          "yaw": -1.6352864365240158,
          "pitch": 0.36876748261806824,
          "rotation": 0,
          "target": "5-installation"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.152855323412311,
          "pitch": -0.07382394507632029,
          "title": "Exhibition Video",
          "text": "https://www.youtube.com/watch?v=8EzM_ppMUuA"
        }
      ]
    },
    {
      "id": "4-expo-entry",
      "name": "Expo Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.8495870569934,
        "pitch": 0.2142127635847615,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 3.033398031484394,
          "pitch": 0.5755085445210177,
          "rotation": 0,
          "target": "2-heads-message"
        },
        {
          "yaw": -2.9378232242032105,
          "pitch": 0.47982387625283707,
          "rotation": 0,
          "target": "3-first-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-installation",
      "name": "Installation",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.1391039385188266,
        "pitch": 0.14753301838996613,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -0.5981468708756967,
          "pitch": 0.36809591387698504,
          "rotation": 0,
          "target": "13-innovations--future"
        },
        {
          "yaw": -1.763288406701479,
          "pitch": 0.4945241439029697,
          "rotation": 0,
          "target": "12-profession"
        },
        {
          "yaw": 1.4573260279928082,
          "pitch": 0.2584190678596219,
          "rotation": 0,
          "target": "4-expo-entry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0002738600817143,
          "pitch": -0.1203928564149308,
          "title": "Exhibition Video",
          "text": "https://www.youtube.com/watch?v=8EzM_ppMUuA"
        }
      ]
    },
    {
      "id": "6-genesis",
      "name": "GENESIS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.15177500939687327,
          "pitch": 0.33027262508975674,
          "rotation": 0,
          "target": "7-the-department"
        },
        {
          "yaw": -1.8889256896741529,
          "pitch": 0.37379501627361833,
          "rotation": 0,
          "target": "3-first-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.8879659027202695,
          "pitch": 0.010763383766065004,
          "title": "Exhibition Video",
          "text": "https://www.youtube.com/watch?v=8EzM_ppMUuA"
        }
      ]
    },
    {
      "id": "7-the-department",
      "name": "The Department",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2580517276604635,
          "pitch": 0.2889411266341426,
          "rotation": 0,
          "target": "8-the-first-movements-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-the-first-movements-",
      "name": "THE FIRST MOVEMENTS ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.1271403796931825,
        "pitch": 0.13263791239997147,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -0.7976633320110924,
          "pitch": 0.5366090691983061,
          "rotation": 0,
          "target": "9-academia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-academia",
      "name": "ACADEMIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.0360996244733887,
        "pitch": 0.13479628723449721,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.2311056689641404,
          "pitch": 0.4321402696466805,
          "rotation": 0,
          "target": "10-ramifications"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ramifications",
      "name": "RAMIFICATIONS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.120843598229384,
        "pitch": 0.0760161316085135,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -1.801291156054159,
          "pitch": 0.4413666562188894,
          "rotation": 0,
          "target": "11-industry-academia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-industry-academia",
      "name": "INDUSTRY-ACADEMIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.28865060706059964,
        "pitch": 0.035701704754316665,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 1.11678102014897,
          "pitch": 0.2731368574103179,
          "rotation": 0,
          "target": "12-profession"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-profession",
      "name": "PROFESSION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.08995039941779126,
        "pitch": 0.07140340950866886,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 1.5517502081932264,
          "pitch": 0.5065607055689494,
          "rotation": 0,
          "target": "13-innovations--future"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-innovations--future",
      "name": "INNOVATIONS & FUTURE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.2915364461590073,
        "pitch": 0.028522203944353564,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": -0.42949168338321897,
          "pitch": 0.40553137822496943,
          "rotation": 0,
          "target": "5-installation"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Past Present, & Future: A Department of Architecture and Regional Planning, IIT Kharagpur Exhibition - 24 August 2022 Onwards",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
