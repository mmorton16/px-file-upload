suite('Custom Automation Tests for px-file-upload', function() {
  let uploadEl;

  setup(function(done) {
    uploadEl = fixture('pxFileUpload');
    flush(()=>{
      done();
    });
  });

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
    var uploadEl2 = fixture('pxFileUpload2');
    var div = uploadEl2.$.dndInstructions,
        message = div.textContent.trim();
    assert.equal(message, "test message");
    done();
  });

});
