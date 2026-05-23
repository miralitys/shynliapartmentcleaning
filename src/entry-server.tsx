import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import App, { getPageHead } from "./App"

export function render(pathname: string) {
  return {
    appHtml: renderToString(
      <StrictMode>
        <App initialPath={pathname} />
      </StrictMode>,
    ),
    head: getPageHead(pathname),
  }
}
