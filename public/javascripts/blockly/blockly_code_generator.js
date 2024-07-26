/** FILE DESC: blockly_code_generator.js **************************************
*   
*   This file dictate the code that is generated when blockly blocks are placed
*   within the workspace.
*   
*   timeInterval and animationTimeInterval are global variables defined
*   in time.js.
*
*******************************************************************************/


/** START BLOCK Code Generation ************************************************
  - generated code from blocks within the start block are put into the
    statements_code variable.

*******************************************************************************/
javascript.javascriptGenerator.forBlock['start_block'] = function(block, generator) {
  //console.log("Generating program code... ");
  var do_statements = javascript.javascriptGenerator.statementToCode(block, 'DO');
  var statements_code = `\n${do_statements}\n`;
  var code = 'showPlayerWalkingAnimation(); \n' + statements_code;
  // var code = "async function fn() {\n" + statements_code + "await sleep(200); }\n";
  return code;
};

/** MOVEMENT BLOCK Code Generation **/
javascript.javascriptGenerator.forBlock['right'] = function(block, generator) {
    var code = 'await sleep(timeInterval); goRight();\n';
    return code;
}

javascript.javascriptGenerator.forBlock['left'] = function(block, generator) {
  var code = 'await sleep(timeInterval); goLeft();\n';
  return code;
};


javascript.javascriptGenerator.forBlock['up'] = function(block, generator) {
  var code = 'await sleep(timeInterval); goUp();\n';
  return code;
};

javascript.javascriptGenerator.forBlock['down'] = function(block, generator) {
  var code = 'await sleep(timeInterval); goDown();\n';
  return code;
};


/** INTERACTION BLOCK Code Generation **/

javascript.javascriptGenerator.forBlock['interact_left'] = function(block, generator) {
  var code = 'await sleep(timeInterval); interactLeft(); await sleep(animationTimeInterval);\n';
  return code;
};

javascript.javascriptGenerator.forBlock['interact_right'] = function(block, generator) {
  var code = 'await sleep(timeInterval); interactRight(); await sleep(animationTimeInterval);\n';
  return code;
};

javascript.javascriptGenerator.forBlock['interact_up'] = function(block, generator) {
  var code = 'await sleep(timeInterval); interactUp(); await sleep(animationTimeInterval);\n';
  return code;
};

javascript.javascriptGenerator.forBlock['interact_down'] = function(block, generator) {
  var code = 'await sleep(timeInterval); interactDown(); await sleep(animationTimeInterval); \n';
  return code;
};

/** LOOP BLOCK Code Generation **/

javascript.javascriptGenerator.forBlock['loop'] = function(block, generator) {
  var loopTimes = block.getFieldValue('TIMES');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
  var code = `for (let i = 0; i < ${loopTimes}; i++) { \n ${statements_do} \n}\n`;
  return code;
};







//Blockly.JavaScript['down_variable'] = function(block) {
//  var number_num = block.getFieldValue('num');
//  var code = `await sleep(timeInterval); goDown(${number_num.toString()});\n`;
//  return code;
//};
//
//Blockly.JavaScript['right_variable'] = function(block) {
//  var number_num = block.getFieldValue('num');
//  var code = `await sleep(timeInterval); goRight(${number_num});\n`;
//  return code;
//};
//
//Blockly.JavaScript['left_variable'] = function(block) {
//  var number_num = block.getFieldValue('num');
//  var code = `await sleep(timeInterval); goLeft(${number_num});\n`;
//  return code;
//};
//
//Blockly.JavaScript['up_variable'] = function(block) {
//  var number_num = block.getFieldValue('num');
//  var code = `await sleep(timeInterval); goUp(${number_num});\n`;
//  return code;
//};