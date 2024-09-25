import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            key="font-preload1"
            rel="preload"
            href="/fonts/american-grotesk-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
        <link
            key="font-preload2"
            rel="preload"
            href="/fonts/american-grotesk-bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
        <link
            key="font-preload3"
            rel="preload"
            href="/fonts/ImmortelInfraG1-Regular.woff"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
        <link
            key="font-preload4"
            rel="preload"
            href="/fonts/ImmortelInfraG1-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
    ])
}