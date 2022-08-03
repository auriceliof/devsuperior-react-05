import { rest } from "msw";
import { setupServer } from "msw/node";
import { BASE_URL } from "utils/requests";

const findCategoriesResponse =
{
    "content": [
        {
            "id": 1,
            "name": "Livros"
        },
        {
            "id": 2,
            "name": "Eletrônicos"
        },
        {
            "id": 3,
            "name": "Computadores"
        }
    ],
    "pageable": {
        "sort": {
            "sorted": false,
            "unsorted": true,
            "empty": true
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 20,
        "paged": true,
        "unpaged": false
    },
    "totalPages": 1,
    "totalElements": 3,
    "last": true,
    "number": 0,
    "sort": {
        "sorted": false,
        "unsorted": true,
        "empty": true
    },
    "size": 20,
    "numberOfElements": 3,
    "first": true,
    "empty": false
}

export const server = setupServer(

    rest.get(`${BASE_URL}/categories`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(findCategoriesResponse)
        );
    })
);
