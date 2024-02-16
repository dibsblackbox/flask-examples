{
  "type": "object",
  "required": ["layout", "keycodes"],
  "properties": {
    "layout": {
      "type": "object",
      "required": ["default", "label"],
      "properties": {
        "default": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "label": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "keycodes": {
      "type": "object",
      "required": ["keyup", "keydown"],
      "properties": {
        "keyup": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "keydown": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "tabs": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "tab": {
            "type": "string"
          },
          "keybindings": {

