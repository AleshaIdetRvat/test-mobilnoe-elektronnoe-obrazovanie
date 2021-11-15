import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Summand } from "./Summand"

const testOnChange = jest.fn()
const testValue = 123

describe("Summand component", () => {
    it("should be render", () => {
        render(<Summand value={testValue} onChange={testOnChange} />)

        expect(screen.getByText("123")).toBeDefined()
    })

    it("on click span unmount and render input", () => {
        render(<Summand value={testValue} onChange={testOnChange} />)
        const span = screen.getByText(testValue)
        const spanAndInputContainer = span.parentElement

        expect(spanAndInputContainer.firstChild.nodeName).toBe("SPAN")

        userEvent.click(span)

        expect(spanAndInputContainer.firstChild.nodeName).toBe("INPUT")
    })

    it("on click span unmount and render input", () => {
        render(<Summand value={testValue} onChange={testOnChange} />)
        const span = screen.getByText(testValue)

        userEvent.click(span)

        userEvent.type(screen.getByRole("textbox"), "test text")

        expect(testOnChange).toHaveBeenCalled()
    })
})
