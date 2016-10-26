
export default function asyncActionCallbackMiddleware() {

    return next => action => {
        const {payload, error, meta={}} = action;
        const {sequence={}, resolved, rejected} = meta;
        error ? 
        (rejected && rejected(payload)) : 
        (resolved && resolved(payload));

        next(action);
    }
}