import { ReactNode } from "react";

type HeadingProps = {
    children: ReactNode
}

function Heading({ children }: HeadingProps) {
    return (
        <h1>{children}</h1>
    )
}

export default Heading