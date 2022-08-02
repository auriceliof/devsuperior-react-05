import { render, screen } from "@testing-library/react";
import { Router, useParams } from "react-router-dom";
import history from 'utils/history'
import Form from "../Form";

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
    
        screen.debug();
    });            
}); 
