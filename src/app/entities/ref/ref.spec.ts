import { Ref } from './ref.entity';

describe('Ref', () => {
    it('should create an instance', () => {
        expect(new Ref()).toBeTruthy();
    });
    it('should accept values in the constructor', () => {
        const ref = new Ref({
            title: 'heroku logs --tails',
            description: 'shows current heroku application logs',
        });
        expect(ref.title).toEqual('heroku logs --tails');
        expect(ref.description).toEqual('shows current heroku application logs');
        // expect(action.completed).toEqual(true);
    });
});
