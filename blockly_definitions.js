/*******************************************************************************
 *    blockly_definitions.js
 * 
 *    This file dictates the appearance and some behaviors of the blockly blocks.
 *    
 *    https://blockly-demo.appspot.com/static/demos/blockfactory/index.html is
 *    a helpful tool for generating new custom blocks.
 *
 *******************************************************************************/


/* START BLOCK  */
Blockly.Blocks['start_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start");
    this.appendStatementInput('DO')   //allows for multiple statements to be added within start block
        .setCheck(null);        
    this.setDeletable(false);         //cannot be deleted from workspace
    this.setMovable(false);           //cannot be moved within workspace
    this.setPreviousStatement(false); //no connector node for a block before start block
    this.setNextStatement(false);     //no connector node for a block after start block
    this.setColour(265);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


/* MOVE LEFT BLOCK  */
Blockly.Blocks['left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("move left");
 this.setHelpUrl("");
  }
};

/* MOVE RIGHT BLOCK  */
Blockly.Blocks['right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("move right");
 this.setHelpUrl("");
  }
};

/* MOVE UP BLOCK  */
Blockly.Blocks['up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move up");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("move up");
 this.setHelpUrl("");
  }
};

/* MOVE DOWN BLOCK  */
Blockly.Blocks['down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move down");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("move down");
 this.setHelpUrl("");
  }
};

/* INTERACT LEFT BLOCK  */
Blockly.Blocks['interact_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("interact left");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("interact left");
 this.setHelpUrl("");
  }
};

/* INTERACT RIGHT BLOCK  */
Blockly.Blocks['interact_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("interact right");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("interact right");
 this.setHelpUrl("");
  }
};

/* INTERACT UP BLOCK  */
Blockly.Blocks['interact_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("interact up");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("interact up");
 this.setHelpUrl("");
  }
};

/* INTERACT DOWN BLOCK  */
Blockly.Blocks['interact_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("interact down");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("interact down");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Do")
        .appendField(new Blockly.FieldNumber(3, 1, Infinity, 1), 'TIMES')
        .appendField("times");
    this.appendStatementInput('DO')
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['place_right'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("place right");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['place_left'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("place left");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['tree'] = {
  init: function() {
    this.appendEndRowInput()
        .appendField("Tree")
        .appendField(new Blockly.FieldImage("https://i.pinimg.com/originals/09/d3/18/09d318ee250c1c5bd3bc31ae7e4ed1d1.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['grass'] = {
  init: function() {
    this.appendEndRowInput()
        .appendField("Grass")
        .appendField(new Blockly.FieldImage("https://static.vecteezy.com/system/resources/previews/022/351/056/non_2x/grass-clipart-grass-transparent-background-free-png.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['stone'] = {
  init: function() {
    this.appendEndRowInput()
        .appendField("stone")
        .appendField(new Blockly.FieldImage("https://png.pngtree.com/png-clipart/20210108/ourmid/pngtree-block-rock-clip-art-png-image_2689543.jpg", 20, 20, { alt: "*", flipRtl: "FALSE" }));
    this.setOutput(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};




//Blockly.Blocks['down_variable'] = {
//  init: function() {
//    this.appendDummyInput()
//        .appendField("move down")
//        .appendField(new Blockly.FieldNumber(1, 1, 5), "num")
//        .appendField("spaces");
//    this.setPreviousStatement(true, null);
//    this.setNextStatement(true, null);
//    this.setColour(65);
// this.setTooltip("move down");
// this.setHelpUrl("");
//  }
//};
//
//Blockly.Blocks['right_variable'] = {
//  init: function() {
//    this.appendDummyInput()
//        .appendField("move right")
//        .appendField(new Blockly.FieldNumber(1, 1, 5), "num")
//        .appendField("spaces");
//    this.setPreviousStatement(true, null);
//    this.setNextStatement(true, null);
//    this.setColour(120);
// this.setTooltip("move right");
// this.setHelpUrl("");
//  }
//};
//
//Blockly.Blocks['left_variable'] = {
//  init: function() {
//    this.appendDummyInput()
//        .appendField("move left")
//        .appendField(new Blockly.FieldNumber(1, 1, 5), "num")
//        .appendField("spaces");
//    this.setPreviousStatement(true, null);
//    this.setNextStatement(true, null);
//    this.setColour(20);
// this.setTooltip("move left");
// this.setHelpUrl("");
//  }
//};
//
//Blockly.Blocks['up_variable'] = {
//  init: function() {
//    this.appendDummyInput()
//        .appendField("move up")
//        .appendField(new Blockly.FieldNumber(1, 1, 5), "num")
//        .appendField("spaces");
//    this.setPreviousStatement(true, null);
//    this.setNextStatement(true, null);
//    this.setColour(290);
// this.setTooltip("move up");
// this.setHelpUrl("");
//  }
//};