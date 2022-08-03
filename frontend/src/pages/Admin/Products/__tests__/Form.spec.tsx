import { render, screen } from "@testing-library/react";
import { Router, useParams } from "react-router-dom";
import history from 'utils/history';
import Form from "../Form";
import useEvent from "@testing-library/react";
import userEvent from "@testing-library/user-event";


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn()
}));

describe('Product form create tests', () => {

    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({
            productId: 'create'
        })
    })

    test( 'Should render form', () => {
    
        render(
            <Router history={history}>
                <Form />
            </Router>
        );
    
        //screen.debug();

        const nameInput = screen.getByTestId("name");
        const priceInput = screen.getByTestId("price");
        const imgUrlInput = screen.getByTestId("imgUrl");
        const descriptionInput = screen.getByTestId("description");
        const categoriesInput = screen.getByLabelText("Categorias");

        userEvent.type(nameInput, 'Computador');
        userEvent.type(priceInput, '5000.12');
        userEvent.type(imgUrlInput, 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg');
        userEvent.type(descriptionInput, 'Computador muito bom');
    });            
}); 
