import { hasAnyRoles } from "utils/auth";
import * as TokenModule from "../token"

describe('hasAnyRoles tests', () => {

    // CENARIO 1
    test('should return true when empty list', () => {
        const result = hasAnyRoles([]);
        expect(result).toEqual(true);
    });

    // CENARIO 2
    test('should return true when user has given role', () => {

        jest.spyOn(TokenModule, 'getTokenData').mockReturnValue({
            exp: 0,
            user_name: '',
            authorities: ['ROLE_ADMIN', 'ROLE_OPERATOR'],
        }); 

        const result = hasAnyRoles(['ROLE_ADMIN']);
        expect(result).toEqual(true);
    });

     // CENARIO 3
     test('should return false when user does not have given role', () => {

        jest.spyOn(TokenModule, 'getTokenData').mockReturnValue({
            exp: 0,
            user_name: '',
            authorities: ['ROLE_OPERATOR'],
        }); 

        const result = hasAnyRoles(['ROLE_ADMIN']);
        expect(result).toEqual(false);
    });
});
