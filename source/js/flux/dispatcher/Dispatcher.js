import { Dispatcher } from "flux";

Dispatcher.prototype.handleViewAction = function (action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};

Dispatcher.prototype.handleServerAction = function (action) {
    this.dispatch({
        source: 'SERVER_ACTION',
        action: action
    });
};

export default new Dispatcher();