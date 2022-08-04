import { render, screen, waitFor } from "@testing-library/react";
import { Router, useParams } from "react-router-dom";
import history from 'utils/history';
import Form from "../Form";
import userEvent from "@testing-library/user-event";
import { server } from "./fixtures";
import selectEvent from "react-select-event";
import { ToastContainer } from "react-toastify";

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

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

    test( 'Should render form', async() => {
    
        render(
            <Router history={history}>
                <ToastContainer />
                <Form />
            </Router>
        );
    
        //screen.debug();

        const nameInput = screen.getByTestId("name");
        const priceInput = screen.getByTestId("price");
        const imgUrlInput = screen.getByTestId("imgUrl");
        const descriptionInput = screen.getByTestId("description");
        const categoriesInput = screen.getByLabelText("Categorias");

        const submitButton = screen.getByRole('button', { name: /salvar/i });

        await selectEvent.select(categoriesInput, ['Eletrônicos', 'Computadores'])

        userEvent.type(nameInput, 'Computador');
        userEvent.type(priceInput, '5000.12');
        userEvent.type(imgUrlInput, 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg');
        userEvent.type(descriptionInput, 'Computador muito bom');

        userEvent.click(submitButton);
        
        await waitFor(() => {
            const toastElement = screen.getByText('Produto cadastrado com sucesso')
                expect(toastElement).toBeInTheDocument();
        });
    });            
}); 
