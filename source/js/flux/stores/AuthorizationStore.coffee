Dispatcher = require("../dispatcher/Dispatcher")
EventEmitter = require("events").EventEmitter

CHANGE_EVENT = 'changeAuthorizationStore'
_isUserAuthorized = no

AuthorizationStore = Object.assign {}, EventEmitter::, {
  getAuthorizationState: ->
    _isUserAuthorized

  emitChange: ->
    @emit(CHANGE_EVENT)

  addChangeListener: (callback) ->
    @on(CHANGE_EVENT, callback)

  removeChangeListener: (callback) ->
    @removeChangeListener(CHANGE_EVENT, callback)
}