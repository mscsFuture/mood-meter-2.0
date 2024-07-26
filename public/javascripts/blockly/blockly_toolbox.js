// Tool box

/*
 * The tree structure of this is
 *   movement
 *    |- move left
 *    |- move right
 *    |- move up
 *    \- move down
 *   interaction
 *    |- interact left
 *    |- interact right
 *    |- interact up
 *    \- interact down
 */

var toolbox = {
  "kind": "categoryToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "Move Blocks",
      "colour": "150",
      "contents": [
        {
          "kind": "block",
          "type": "left"
        },
        {
          "kind": "block",
          "type": "right"
        },
        {
          "kind": "block",
          "type": "up"
        },
        {
          "kind": "block",
          "type": "down"
        }
      ]
    },
    {
      "kind": "category",
      "name": "Loop Blocks",
      "colour": "60",
      "contents": [
        {
          "kind": "block",
          "type": "loop"
        }
      ]
    }
  ]
};

