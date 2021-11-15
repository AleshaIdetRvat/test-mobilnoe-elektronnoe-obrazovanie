import React from "react"
import { render, screen } from "@testing-library/react"
import { Popup } from "./Popup"

describe("Popup component", () => {
    it('should renders "TEST TEXT IN POPUP"', () => {
        render(<Popup>TEST TEXT IN POPUP</Popup>)

        const textElement = screen.getByText("TEST TEXT IN POPUP")

        expect(textElement).toBeDefined()
    })

    it('with prop isShowing = true  should be have class "popup--showing" ', () => {
        const { container } = render(<Popup isShowing={true}>test text</Popup>)

        expect(container.firstChild.classList.contains("popup--showing")).toBe(
            true
        )
    })
})
