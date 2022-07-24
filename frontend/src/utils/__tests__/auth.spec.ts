import { hasAnyRoles } from "utils/auth";

describe('hasAnyRoles tests', () => {

    test('should return true when empty list', () => {
        const result = hasAnyRoles([]);
        expect(result).toEqual(true);
    });
});
