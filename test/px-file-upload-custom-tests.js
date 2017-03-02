// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for px-file-upload', function() {
    var uploadEl = Polymer.dom(document).querySelector('#px-file-upload');
    var uploadEl2 = Polymer.dom(document).querySelector('#px-file-upload2');
    var uploadEl3 = Polymer.dom(document).querySelector('#px-file-upload3');
    var filelist = {0: {name:'Test.txt',size: 5000,type:"text/plain"}};
    test('Check that fixture  is created', function(done){
      assert.isDefined(uploadEl);
      done();
    });
    test('Check that label button exists', function(done){
      var button = uploadEl.$$('#fileButton');
      assert.isDefined(button);
      done();
    });
    test('Check that fixture has multiple property', function(done){
      var multiple = uploadEl.multiple;
      assert.isTrue(multiple);
      done();
    });
    test('Check that hidden input is really hidden', function(done){
      var input = uploadEl.$$('#fileInput');
      assert.isTrue(input.hidden);
      done();
    });
    test('Check that message is "test message"', function(done){
      var span = uploadEl2.$.dndInstructions,
          message = span.textContent.trim(); //the trim removes \n lines
      assert.equal(message, "test message");
      done();
    });
    test('Check multiple language is zh-cn"', function(done){
      var button = uploadEl3.$$('#fileButton');
      button = button.textContent.trim();
      assert.equal(button,"选择文件");
      done();
    });

  });
}
