describe('@createMocks', function () {
  var MochaMix = require('../');
  var expect = require('expect');

  it('should return react stub for the string value', function () {
    var spec = {
      ProfileLink: './ProfileLink'
    };

    var mocks = MochaMix.createMocks(spec);
    expect(mocks.ProfileLink).toExist();
    expect(mocks.ProfileLink.displayName).toBe('ProfileLink stub');
  });

  it('should return react stub for the spec object', function () {
    var spec = {
      ProfileLink: {
        require: './ProfileLink'
      }
    };

    var mocks = MochaMix.createMocks(spec);
    expect(mocks.ProfileLink).toExist();
    expect(mocks.ProfileLink.displayName).toBe('ProfileLink stub');
  });

  it('should return custom mock', function () {
    var Stub = {
      name: 'hello'
    };

    var spec = {
      Lodash: {
        require: 'lodash',
        react: false,
        mock: Stub
      }
    };

    var mocks = MochaMix.createMocks(spec);
    expect(mocks.Lodash.name).toBe(Stub.name);
  });

  it('should return react mocks for Router.Link', function () {
    var spec = {
      Router: {
        require: 'react-router',

        modules: {
          Link: true
        }
      }
    };

    var mocks = MochaMix.createMocks(spec);
    expect(mocks.Router.Link).toExist();
    expect(mocks.Router.Link.displayName).toBe('Link stub');
  });

  it('should return react mocks for Router.Link with customTag', function () {
    var spec = {
      Router: {
        require: 'react-router',

        modules: {
          Link: {
            tagName: 'a'
          }
        }
      }
    };

    var mocks = MochaMix.createMocks(spec);
    expect(mocks.Router.Link).toExist();
    expect(mocks.Router.Link.displayName).toBe('Link stub');
    MochaMix.assertRender(mocks.Router.Link, {}, 'a');
  });

  it('should return react stub with given tagName', function () {
    var spec = {
      CustomInput: {
        require: './ProfileLink',
        tagName: 'input'
      }
    };
    var mocks = MochaMix.createMocks(spec);
    MochaMix.assertRender(mocks.CustomInput, {}, 'input');
  });
});
