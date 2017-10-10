import Dispatcher from "../dispatcher/Dispatcher";
import EventEmitter from "events";

const CHANGE_EVENT = 'changeAuthorizationStore';
let _isUserAuthorized = false;

let AuthorizationStore = Object.assign({}, EventEmitter.prototype, {
  getAuthorizationState: function() {
      return _isUserAuthorized;
  },
  emitChange: function() {
      this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback)
  }
});

export default AuthorizationStore;