import styles from "./styles";

export function layout(content: string, title?: string) {
  return `
            <!DOCTYPE html>
            <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍🚀</text></svg>">
                <title>${title ? `${title} | ` : ""}Fwitter</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet">
                <style>${styles}</style>
            </head>
            <body>
                <header>
                <div class="header-title dmserif"><span class="primary italic title-highlight">FW</span>itter <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2.8C19.2483 3.12609 18.4534 3.34166 17.64 3.44C18.4982 2.92732 19.1413 2.12078 19.45 1.17C18.6436 1.65006 17.7608 1.98829 16.84 2.17C16.2245 1.50257 15.405 1.05829 14.5098 0.906847C13.6147 0.755403 12.6945 0.905354 11.8938 1.33319C11.093 1.76102 10.4569 2.44253 10.0852 3.27083C9.71355 4.09914 9.62729 5.02739 9.84 5.91C8.20943 5.82752 6.61444 5.40295 5.15865 4.66386C3.70287 3.92477 2.41885 2.88769 1.39 1.62C1.02914 2.25016 0.839519 2.96382 0.84 3.69C0.83872 4.36438 1.00422 5.02861 1.32176 5.62356C1.63929 6.21851 2.09902 6.72571 2.66 7.1C2.00798 7.08226 1.36989 6.90729 0.8 6.59V6.64C0.804887 7.58489 1.13599 8.49909 1.73731 9.22796C2.33864 9.95683 3.17326 10.4556 4.1 10.64C3.74326 10.7486 3.37287 10.8058 3 10.81C2.74189 10.807 2.48442 10.7836 2.23 10.74C2.49391 11.5528 3.00462 12.2631 3.69107 12.7722C4.37753 13.2812 5.20558 13.5635 6.06 13.58C4.6172 14.7153 2.83588 15.3349 1 15.34C0.665735 15.3411 0.331736 15.3211 0 15.28C1.87443 16.4903 4.05881 17.1327 6.29 17.13C7.82969 17.146 9.35714 16.855 10.7831 16.2741C12.2091 15.6931 13.505 14.8339 14.5952 13.7465C15.6854 12.6591 16.548 11.3654 17.1326 9.9409C17.7172 8.51642 18.012 6.98972 18 5.45C18 5.28 18 5.1 18 4.92C18.7847 4.33481 19.4615 3.61742 20 2.8Z" fill="#F8D821"/>
                </svg>
                </div>
                </header>
                <div class="container">
                ${content}
                </div>
            </body>
            </html>
        `;
}
