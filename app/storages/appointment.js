import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
    initialState() {
        return { appointment: {} };
    }
});

export default Storage;