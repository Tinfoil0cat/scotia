// Define the toolbox for Blockly. This is where you list all the blocks
// you want to appear in your editor's palette.
// Each <category> is a section in the toolbox, and <block> defines a block.
var toolbox = `
  <xml id="toolbox" style="display: none">
    <category name="Motion" colour="#4C97FF">
      <block type="motion_movesteps"></block>
      <block type="motion_turnright"></block>
      <block type="motion_turnleft"></block>
    </category>
    <category name="Looks" colour="#9966FF">
      <block type="looks_sayforsecs"></block>
      <block type="looks_switchcostumeto"></block>
    </category>
    <category name="Events" colour="#FFD500">
      <block type="event_whenflagclicked"></block>
      <block type="event_whenthisspriteclicked"></block>
    </category>
    <category name="Control" colour="#FFAB19">
      <block type="control_repeat"></block>
      <block type="control_forever"></block>
      <block type="control_if"></block>
    </category>
    <category name="Variables" colour="#FF8C1A" custom="VARIABLE"></category>
  </xml>
`;

// Initialize the Blockly Workspace
// 'blocklyDiv' is the ID of the div element in your HTML where Blockly will be injected.
// 'toolbox' defines the blocks available to the user.
// 'scrollbars: true' adds scrollbars if the workspace content exceeds the visible area.
// 'trashcan: true' adds a trashcan for deleting blocks.
// 'horizontalLayout: false' (default) places the toolbox vertically.
// 'toolboxPosition: 'start'' places the toolbox on the left.
// 'css: true' uses Blockly's default CSS.
// 'media: 'https://unpkg.com/blockly/media/'' specifies the path to Blockly's media files (icons).
var workspace = Blockly.inject('blocklyDiv', {
    media: 'https://unpkg.com/blockly/media/',
    toolbox: toolbox,
    scrollbars: true,
    trashcan: true,
    horizontalLayout: false, // This is the default, but explicitly stating it
    toolboxPosition: 'start', // This is the default, but explicitly stating it
    css: true // Use Blockly's default CSS
});

// This makes the Blockly workspace responsive to window resizing.
// It ensures the workspace adjusts its size if the browser window is resized.
window.addEventListener('resize', function() {
    Blockly.resize(workspace);
});

// Call resize immediately after injection to set the initial size correctly.
Blockly.resize(workspace);

// You can optionally load some initial blocks into the workspace if you want.
// For example, to load the "when flag clicked" block by default:
// var initialXml = '<xml><block type="event_whenflagclicked" x="50" y="50"></block></xml>';
// Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), workspace);
