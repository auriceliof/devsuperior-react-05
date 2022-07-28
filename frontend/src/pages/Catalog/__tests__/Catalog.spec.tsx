import { render, screen, waitFor } from "@testing-library/react";
import { Router } from "react-router-dom";
import history from 'utils/history';
import Catalog from "..";

describe( 'should render Catalog with products', () => {

    //CENÁRIO-1
    test( 'should render Catalog', () => {
    
        render(
            <Router history={history}>
                <Catalog />
            </Router>
        );

        expect(screen.getByText('Catálogo de Produtos')).toBeInTheDocument();

    });    

    //CENÁRIO-2
    test( 'should render Product async', async () => {
    
        render(
            <Router history={history}>
                <Catalog />
            </Router>
        );
      
        expect(screen.getByText('Catálogo de Produtos')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Smart TV')).toBeInTheDocument();
        });
    });
        
});
