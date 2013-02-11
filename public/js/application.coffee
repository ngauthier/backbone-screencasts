mixin = (destination) ->
  _.extend this.prototype, destination.instance
  _.extend this,           destination.class

Backbone.Model.mixin = mixin


Timestamps =
  instance:
    updatedAt: ->
      Timestamps.class.timeParse(@get('updated_at'))
    createdAt: ->
      Timestamps.class.timeParse(@get('created_at'))

  class:
    timeParse: (t) ->
      new Date(Date.parse(t))

class Person extends Backbone.Model
  @mixin Timestamps

$ ->
  output = $('#output')
  person = new Person
    created_at: "2013-02-04T17:05:57.760Z"
  output.text person.createdAt().toString()
