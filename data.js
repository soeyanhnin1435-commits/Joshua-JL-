var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "living",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 0.04649532213527863,
          "pitch": 0.15144382596016825,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -0.6406145175049929,
          "pitch": 0.24715703216667784,
          "rotation": 4.71238898038469,
          "target": "2-mb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "kitchen",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1931753353475116,
          "pitch": 0.1390773831266774,
          "rotation": 4.71238898038469,
          "target": "3-working"
        },
        {
          "yaw": -1.5486650160149633,
          "pitch": 0.12334066442304703,
          "rotation": 0,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-mb",
      "name": "MB",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8492236127547272,
          "pitch": 0.22828029341846268,
          "rotation": 1.5707963267948966,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-working",
      "name": "Working",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.19262502130033887,
          "pitch": 0.18688403001628373,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kid",
      "name": "kid",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.037777657417479,
          "pitch": 0.18460124953998402,
          "rotation": 0,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
