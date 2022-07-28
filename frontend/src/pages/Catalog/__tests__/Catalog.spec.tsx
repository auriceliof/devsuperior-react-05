import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import history from 'utils/history';
import Catalog from "..";

describe( 'should render Catalog with products', () => {

    //CENÁRIO-1
    test( '', () => {
    
        render(
            <Router history={history}>
                <Catalog />
            </Router>
        );

        expect(screen.getByText('Catálogo de Produtos')).toBeInTheDocument();
        
    });    
});
