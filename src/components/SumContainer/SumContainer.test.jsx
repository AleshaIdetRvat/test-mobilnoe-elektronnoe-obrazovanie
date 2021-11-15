import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SumContainer from "./SumContainer"

describe("SumContainer component", () => {
    it("sum logic should be work", () => {
        const { getByRole, container, debug } = render(<SumContainer />)

        const sumButton = screen.getByText("Посчитать")

        userEvent.tab() // focus on first term input

        userEvent.type(getByRole("textbox"), "123")

        userEvent.tab() // focus on second term input

        userEvent.type(getByRole("textbox"), "123")

        userEvent.click(sumButton)

        const res = container.getElementsByClassName("popup__container")[0]

        expect(res.innerHTML).toBe("246")
    })
})
