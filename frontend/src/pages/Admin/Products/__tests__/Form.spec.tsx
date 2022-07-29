import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import history from 'utils/history'
import Form from "../Form";

test( 'Should render form', () => {

    render(
        <Router history={history}>
            <Form />
        </Router>
    );

    screen.debug();
});

