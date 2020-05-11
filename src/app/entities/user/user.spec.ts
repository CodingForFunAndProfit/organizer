import { User } from './user.entity';

describe('User', () => {
    it('should create an instance', () => {
        expect(new User()).toBeTruthy();
    });
    it('should accept values in the constructor', () => {
        const user = new User({
            email: 'bill@gates.com',
        });
        expect(user.email).toEqual('bill@gates.com');
        // expect(action.completed).toEqual(true);
    });
});
