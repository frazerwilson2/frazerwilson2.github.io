import styles from "./styles";

export function layout(content: string, title?: string) {
  return `
            <!DOCTYPE html>
            <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍🚀</text></svg>">
                <title>${title ? `${title} | ` : ""}Fwitter</title>
                <style>${styles}</style>
            </head>
            <body>
                <div class="container">
                ${content}
                </div>
            </body>
            </html>
        `;
}
