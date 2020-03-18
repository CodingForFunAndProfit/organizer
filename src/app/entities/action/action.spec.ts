import { Action } from './action';

describe('Action', () => {
    it('should create an instance', () => {
        expect(new Action()).toBeTruthy();
    });
    it('should accept values in the constructor', () => {
        const action = new Action({
            title: 'hello',
            completed: true,
        });
        expect(action.title).toEqual('hello');
        expect(action.completed).toEqual(true);
    });
});
