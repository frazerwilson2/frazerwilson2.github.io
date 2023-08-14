import styles from "./styles";

export function layout(content: string, title?: string) {
  return `
            <!DOCTYPE html>
            <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
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
