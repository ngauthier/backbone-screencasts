(function() {
  var Person, Timestamps, mixin,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  mixin = function(destination) {
    _.extend(this.prototype, destination.instance);
    return _.extend(this, destination["class"]);
  };

  Backbone.Model.mixin = mixin;

  Timestamps = {
    instance: {
      updatedAt: function() {
        return Timestamps["class"].timeParse(this.get('updated_at'));
      },
      createdAt: function() {
        return Timestamps["class"].timeParse(this.get('created_at'));
      }
    },
    "class": {
      timeParse: function(t) {
        return new Date(Date.parse(t));
      }
    }
  };

  Person = (function(_super) {

    __extends(Person, _super);

    function Person() {
      return Person.__super__.constructor.apply(this, arguments);
    }

    Person.mixin(Timestamps);

    return Person;

  })(Backbone.Model);

  $(function() {
    var output, person;
    output = $('#output');
    person = new Person({
      created_at: "2013-02-04T17:05:57.760Z"
    });
    return output.text(person.createdAt().toString());
  });

}).call(this);
