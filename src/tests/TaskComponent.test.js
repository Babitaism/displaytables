import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import TaskComponent from "../Components/TaskComponent";
import Modal from "../Components/Modal";
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "../store/store";

// afterEach(() => {
//   cleanup(); // Resets the DOM after each test suite
// })

let obj={
    value:{ columns: [], rows: []},
    value1:{
        flagvalue:false,
        refinedData:{ columns: [], rows: []}
    }
}

console.log('-----------------')


// describe('Task compoent testing', () => {
//     it('checks Task compoent render when empty props are passed', () => {
//         render(<BrowserRouter>
//                <Provider store={store}>
//                <TaskComponent value={obj.value} value1={obj.value1} />
//                </Provider>
//         </BrowserRouter>);
//         const heading = screen.getByText(/No rows/i);
//         expect(heading).toBeInTheDocument()
//     });
// });

test('function is called with given obj',()=>{
    console.log("hi")
    const renderUpdatedTable = jest.fn()
    let obj={columns:[],rows:[]}
    renderUpdatedTable(obj)
    expect(renderUpdatedTable).toHaveBeenCalledWith(obj)
})


