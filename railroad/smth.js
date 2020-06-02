const rawSvgCollection = {
    crossSectionRail: {
        up: pos=>`<svg y="${pos}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="61" y="61" width="61" height="61" transform="rotate(-180 61 61)" fill="white" fill-opacity="0.5"/>
            <line x1="61" y1="30.5" x2="3.72727e-06" y2="30.5" stroke="black"/>
            <line x1="30.5" y1="30" x2="30.5" y2="-2.18557e-08" stroke="black"/>
            <line x1="55.5" y1="37" x2="55.5" y2="25" stroke="black"/>
            <line x1="24" y1="20.5" x2="37" y2="20.5" stroke="black"/>
            <line x1="24" y1="14.5" x2="37" y2="14.5" stroke="black"/>
            <line x1="24" y1="8.5" x2="37" y2="8.5" stroke="black"/>
            <line x1="6.5" y1="37" x2="6.5" y2="25" stroke="black"/>
            <line x1="13.5" y1="37" x2="13.5" y2="25" stroke="black"/>
            <line x1="19.5" y1="37" x2="19.5" y2="25" stroke="black"/>
            <line x1="25.6464" y1="35.6464" x2="35.8891" y2="25.4038" stroke="black"/>
            <line x1="35.8891" y1="36.3536" x2="25.6465" y2="26.1109" stroke="black"/>
            <line x1="41.5" y1="37" x2="41.5" y2="25" stroke="black"/>
            <line x1="48.5" y1="37" x2="48.5" y2="25" stroke="black"/>
            </svg>`,
        down: pos=>`<svg y="${pos}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="61" height="61" fill="white" fill-opacity="0.5"/>
            <line x1="4.37114e-08" y1="30.5" x2="61" y2="30.5" stroke="black"/>
            <line x1="30.5" y1="31" x2="30.5" y2="61" stroke="black"/>
            <line x1="5.5" y1="24" x2="5.5" y2="36" stroke="black"/>
            <line x1="37" y1="40.5" x2="24" y2="40.5" stroke="black"/>
            <line x1="37" y1="46.5" x2="24" y2="46.5" stroke="black"/>
            <line x1="37" y1="52.5" x2="24" y2="52.5" stroke="black"/>
            <line x1="54.5" y1="24" x2="54.5" y2="36" stroke="black"/>
            <line x1="47.5" y1="24" x2="47.5" y2="36" stroke="black"/>
            <line x1="41.5" y1="24" x2="41.5" y2="36" stroke="black"/>
            <line x1="35.3536" y1="25.3536" x2="25.1109" y2="35.5962" stroke="black"/>
            <line x1="25.1109" y1="24.6464" x2="35.3536" y2="34.8891" stroke="black"/>
            <line x1="19.5" y1="24" x2="19.5" y2="36" stroke="black"/>
            <line x1="12.5" y1="24" x2="12.5" y2="36" stroke="black"/>
            </svg>`
    },
    curvedRail: {
        left: pos=>`<svg y="${pos}" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="62" width="61" height="61" transform="rotate(-90 1 62)" fill="white" fill-opacity="0.5"/>
            <path d="M1 31.5C13.651 31.5977 24.5 32.3427 28 27.5C32.468 22.7966 31.6217 12.2602 31.5 1.00003" stroke="black"/>
            <line x1="8.5" y1="25" x2="8.5" y2="37" stroke="black"/>
            <line x1="25" y1="8.5" x2="37" y2="8.5" stroke="black"/>
            <line x1="25" y1="14.5" x2="37" y2="14.5" stroke="black"/>
            <line x1="24" y1="20.5" x2="36" y2="20.5" stroke="black"/>
            <line x1="23.1156" y1="23.9399" x2="31.3632" y2="32.6564" stroke="black"/>
            <line x1="20.1428" y1="25.435" x2="22.4256" y2="37.2159" stroke="black"/>
            <line x1="14.3953" y1="24.9961" x2="14.5" y2="36.9956" stroke="black"/>
            </svg>`,
        down: pos=>`<svg y="${pos}" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="62" y="61" width="61" height="61" transform="rotate(-180 62 61)" fill="white" fill-opacity="0.5"/>
            <path d="M31.5 61C31.5977 48.349 32.3427 37.5 27.5 34C22.7966 29.532 12.2602 30.3783 1.00001 30.5" stroke="black"/>
            <line x1="25" y1="53.5" x2="37" y2="53.5" stroke="black"/>
            <line x1="8.50001" y1="37" x2="8.50001" y2="25" stroke="black"/>
            <line x1="14.5" y1="37" x2="14.5" y2="25" stroke="black"/>
            <line x1="20.5" y1="38" x2="20.5" y2="26" stroke="black"/>
            <line x1="23.9399" y1="38.8844" x2="32.6564" y2="30.6368" stroke="black"/>
            <line x1="25.435" y1="41.8572" x2="37.2159" y2="39.5744" stroke="black"/>
            <line x1="24.9961" y1="47.6047" x2="36.9956" y2="47.5" stroke="black"/>
            </svg>`,
        right: pos=>`<svg y="${pos}" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="61" width="61" height="61" transform="rotate(90 61 0)" fill="white" fill-opacity="0.5"/>
            <path d="M61 30.5C48.349 30.4023 37.5 29.6573 34 34.5C29.532 39.2034 30.3783 49.7398 30.5 61" stroke="black"/>
            <line x1="53.5" y1="37" x2="53.5" y2="25" stroke="black"/>
            <line x1="37" y1="53.5" x2="25" y2="53.5" stroke="black"/>
            <line x1="37" y1="47.5" x2="25" y2="47.5" stroke="black"/>
            <line x1="38" y1="41.5" x2="26" y2="41.5" stroke="black"/>
            <line x1="38.8844" y1="38.0601" x2="30.6368" y2="29.3436" stroke="black"/>
            <line x1="41.8571" y1="36.565" x2="39.5744" y2="24.7841" stroke="black"/>
            <line x1="47.6047" y1="37.0039" x2="47.5" y2="25.0043" stroke="black"/>
            </svg>`,
        up: pos=>`<svg y="${pos}" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="1" width="61" height="61" fill="white" fill-opacity="0.5"/>
            <path d="M30.5 1C30.4023 13.651 29.6573 24.5 34.5 28C39.2034 32.468 49.7398 31.6217 61 31.5" stroke="black"/>
            <line x1="37" y1="8.5" x2="25" y2="8.5" stroke="black"/>
            <line x1="53.5" y1="25" x2="53.5" y2="37" stroke="black"/>
            <line x1="47.5" y1="25" x2="47.5" y2="37" stroke="black"/>
            <line x1="41.5" y1="24" x2="41.5" y2="36" stroke="black"/>
            <line x1="38.0601" y1="23.1156" x2="29.3436" y2="31.3632" stroke="black"/>
            <line x1="36.565" y1="20.1428" x2="24.7842" y2="22.4256" stroke="black"/>
            <line x1="37.0039" y1="14.3953" x2="25.0044" y2="14.5" stroke="black"/>
            </svg>`
    },
    straightRail: {
        horizontal: pos=>`<svg y="${pos}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="61" height="61" fill="white" fill-opacity="0.5"/>
            <line x1="4.37114e-08" y1="30.5" x2="61" y2="30.5" stroke="black"/>
            <line x1="7.5" y1="24" x2="7.5" y2="36" stroke="black"/>
            <line x1="55.5" y1="24" x2="55.5" y2="36" stroke="black"/>
            <line x1="47.5" y1="24" x2="47.5" y2="36" stroke="black"/>
            <line x1="39.5" y1="24" x2="39.5" y2="36" stroke="black"/>
            <line x1="31.5" y1="24" x2="31.5" y2="36" stroke="black"/>
            <line x1="23.5" y1="24" x2="23.5" y2="36" stroke="black"/>
            <line x1="15.5" y1="24" x2="15.5" y2="36" stroke="black"/>
            </svg>`,
        vertical: pos=>`<svg y="${pos}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="61" width="61" height="61" transform="rotate(90 61 0)" fill="white" fill-opacity="0.5"/>
            <line x1="30.5" y1="6.55671e-08" x2="30.5" y2="61" stroke="black"/>
            <line x1="37" y1="7.5" x2="25" y2="7.5" stroke="black"/>
            <line x1="37" y1="55.5" x2="25" y2="55.5" stroke="black"/>
            <line x1="37" y1="47.5" x2="25" y2="47.5" stroke="black"/>
            <line x1="37" y1="39.5" x2="25" y2="39.5" stroke="black"/>
            <line x1="37" y1="31.5" x2="25" y2="31.5" stroke="black"/>
            <line x1="37" y1="23.5" x2="25" y2="23.5" stroke="black"/>
            <line x1="37" y1="15.5" x2="25" y2="15.5" stroke="black"/>
            </svg>`
    },
    straightRoad: {
        horizontal: pos=>`<svg y="${pos}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="61" height="61" fill="white" fill-opacity="0.5"/>
            <line x1="4.37114e-08" y1="36.5" x2="61" y2="36.5" stroke="black"/>
            <line x1="4.37114e-08" y1="23.5" x2="61" y2="23.5" stroke="black"/>
            <line x1="12" y1="30.5" x2="6" y2="30.5" stroke="black"/>
            <line x1="21" y1="30.5" x2="15" y2="30.5" stroke="black"/>
            <line x1="30" y1="30.5" x2="24" y2="30.5" stroke="black"/>
            <line x1="39" y1="30.5" x2="33" y2="30.5" stroke="black"/>
            <line x1="48" y1="30.5" x2="42" y2="30.5" stroke="black"/>
            <line x1="57" y1="30.5" x2="51" y2="30.5" stroke="black"/>
            </svg>`,
        vertical: pos=>`<svg y="${pos}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="61" width="61" height="61" transform="rotate(90 61 0)" fill="white" fill-opacity="0.5"/>
            <line x1="24.5" y1="6.55671e-08" x2="24.5" y2="61" stroke="black"/>
            <line x1="37.5" y1="6.55671e-08" x2="37.5" y2="61" stroke="black"/>
            <line x1="30.5" y1="12" x2="30.5" y2="6" stroke="black"/>
            <line x1="30.5" y1="21" x2="30.5" y2="15" stroke="black"/>
            <line x1="30.5" y1="30" x2="30.5" y2="24" stroke="black"/>
            <line x1="30.5" y1="39" x2="30.5" y2="33" stroke="black"/>
            <line x1="30.5" y1="48" x2="30.5" y2="42" stroke="black"/>
            <line x1="30.5" y1="57" x2="30.5" y2="51" stroke="black"/>
            </svg>`
    },
    curvedRoad: {
        left: pos=>`<svg y="${pos}" width="61" height="63" viewBox="0 0 61 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="62.2698" width="61" height="61" transform="rotate(-90 0 62.2698)" fill="white" fill-opacity="0.5"/>
            <path d="M1.5 38.7698C1.5 38.7698 28.5 39.7698 34 34.2698C39.5 28.7698 37.5 1.26985 37.5 1.26985" stroke="black"/>
            <path d="M1.5 25.7698C1.5 25.7698 19 26.6865 22.5 23.7698C26 20.8531 24.5 1.26981 24.5 1.26981" stroke="black"/>
            <line x1="8" y1="31.7698" x2="2" y2="31.7698" stroke="black"/>
            <line x1="17" y1="31.7698" x2="11" y2="31.7698" stroke="black"/>
            <line x1="25.044" y1="30.6231" x2="20.0803" y2="31.1822" stroke="black"/>
            <line x1="31.3286" y1="26.6467" x2="28.0051" y2="29.5445" stroke="black"/>
            <line x1="30.8383" y1="19.514" x2="30.8383" y2="23.9234" stroke="black"/>
            <line x1="30.5" y1="10.2698" x2="30.5" y2="16.2698" stroke="black"/>
            <line x1="30.5" y1="2.26981" x2="30.5" y2="8.26981" stroke="black"/>
            </svg>`,
        down: pos=>`<svg y="${pos}" width="63" height="61" viewBox="0 0 63 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="62.2698" y="61" width="61" height="61" transform="rotate(-180 62.2698 61)" fill="white" fill-opacity="0.5"/>
            <path d="M38.7698 59.5C38.7698 59.5 39.7698 32.5 34.2698 27C28.7698 21.5 1.26985 23.5 1.26985 23.5" stroke="black"/>
            <path d="M25.7698 59.5C25.7698 59.5 26.6865 42 23.7698 38.5C20.8531 35 1.26981 36.5 1.26981 36.5" stroke="black"/>
            <line x1="31.7698" y1="53" x2="31.7698" y2="59" stroke="black"/>
            <line x1="31.7698" y1="44" x2="31.7698" y2="50" stroke="black"/>
            <line x1="30.6231" y1="35.956" x2="31.1822" y2="40.9197" stroke="black"/>
            <line x1="26.6467" y1="29.6714" x2="29.5445" y2="32.9949" stroke="black"/>
            <line x1="19.514" y1="30.1617" x2="23.9234" y2="30.1617" stroke="black"/>
            <line x1="10.2698" y1="30.5" x2="16.2698" y2="30.5" stroke="black"/>
            <line x1="2.26984" y1="30.5" x2="8.26984" y2="30.5" stroke="black"/>
            </svg>`,
        right: pos=>`<svg y="${pos}" width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="61" width="61" height="61" transform="rotate(90 61 0)" fill="white" fill-opacity="0.5"/>
            <path d="M59.5 23.5C59.5 23.5 32.5 22.5 27 28C21.5 33.5 23.5 61 23.5 61" stroke="black"/>
            <path d="M59.5 36.5C59.5 36.5 42 35.5833 38.5 38.5C35 41.4167 36.5 61 36.5 61" stroke="black"/>
            <line x1="53" y1="30.5" x2="59" y2="30.5" stroke="black"/>
            <line x1="44" y1="30.5" x2="50" y2="30.5" stroke="black"/>
            <line x1="35.956" y1="31.6467" x2="40.9197" y2="31.0876" stroke="black"/>
            <line x1="29.6714" y1="35.6231" x2="32.9949" y2="32.7253" stroke="black"/>
            <line x1="30.1617" y1="42.7558" x2="30.1617" y2="38.3464" stroke="black"/>
            <line x1="30.5" y1="52" x2="30.5" y2="46" stroke="black"/>
            <line x1="30.5" y1="60" x2="30.5" y2="54" stroke="black"/>
            </svg>`,
        up: pos=>`<svg y="${pos}" width="62" height="61" viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="61" height="61" fill="white" fill-opacity="0.5"/>
            <path d="M23.5 1.5C23.5 1.5 22.5 28.5 28 34C33.5 39.5 61 37.5 61 37.5" stroke="black"/>
            <path d="M36.5 1.5C36.5 1.5 35.5833 19 38.5 22.5C41.4167 26 61 24.5 61 24.5" stroke="black"/>
            <line x1="30.5" y1="8" x2="30.5" y2="2" stroke="black"/>
            <line x1="30.5" y1="17" x2="30.5" y2="11" stroke="black"/>
            <line x1="31.6467" y1="25.044" x2="31.0876" y2="20.0803" stroke="black"/>
            <line x1="35.6232" y1="31.3286" x2="32.7253" y2="28.0051" stroke="black"/>
            <line x1="42.7558" y1="30.8383" x2="38.3464" y2="30.8383" stroke="black"/>
            <line x1="52" y1="30.5" x2="46" y2="30.5" stroke="black"/>
            <line x1="60" y1="30.5" x2="54" y2="30.5" stroke="black"/>
            </svg>`
    },
    triJunction: {
        left: pos=>`<svg y="${pos}" width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="62.2698" y="62" width="61" height="61" transform="rotate(180 62.2698 62)" fill="white" fill-opacity="0.5"/>
            <path d="M25.7698 60.5C25.7698 60.5 26.6864 43 23.7698 39.5C20.8531 36 1.26977 37.5 1.26977 37.5" stroke="black"/>
            <path d="M25.7698 1.36533C25.7698 1.36533 26.6864 18.8653 23.7698 22.3653C20.8531 25.8653 1.26978 24.3653 1.26978 24.3653" stroke="black"/>
            <line x1="31.7698" y1="54" x2="31.7698" y2="60" stroke="black"/>
            <line x1="31.7698" y1="45" x2="31.7698" y2="51" stroke="black"/>
            <line x1="31.7698" y1="36" x2="31.7698" y2="42" stroke="black"/>
            <line x1="31.7698" y1="27" x2="31.7698" y2="33" stroke="black"/>
            <line x1="31.7698" y1="18" x2="31.7698" y2="24" stroke="black"/>
            <line x1="31.7698" y1="8" x2="31.7698" y2="14" stroke="black"/>
            <line x1="22.514" y1="31.1617" x2="26.9234" y2="31.1617" stroke="black"/>
            <line x1="12.2698" y1="31.5" x2="18.2698" y2="31.5" stroke="black"/>
            <line x1="2.26981" y1="31.5" x2="8.26981" y2="31.5" stroke="black"/>
            <line x1="38.7698" y1="2" x2="38.7698" y2="61" stroke="black"/>
            </svg>`,
        down: pos=>`<svg y="${pos}" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="62" width="61" height="61" transform="rotate(90 62 0)" fill="white" fill-opacity="0.5"/>
            <path d="M60.5 36.5C60.5 36.5 43 35.5833 39.5 38.5C36 41.4167 37.5 61 37.5 61" stroke="black"/>
            <path d="M1.36533 36.5C1.36533 36.5 18.8653 35.5833 22.3653 38.5C25.8653 41.4167 24.3653 61 24.3653 61" stroke="black"/>
            <line x1="54" y1="30.5" x2="60" y2="30.5" stroke="black"/>
            <line x1="45" y1="30.5" x2="51" y2="30.5" stroke="black"/>
            <line x1="36" y1="30.5" x2="42" y2="30.5" stroke="black"/>
            <line x1="27" y1="30.5" x2="33" y2="30.5" stroke="black"/>
            <line x1="18" y1="30.5" x2="24" y2="30.5" stroke="black"/>
            <line x1="8" y1="30.5" x2="14" y2="30.5" stroke="black"/>
            <line x1="31.1617" y1="39.7558" x2="31.1617" y2="35.3464" stroke="black"/>
            <line x1="31.5" y1="50" x2="31.5" y2="44" stroke="black"/>
            <line x1="31.5" y1="60" x2="31.5" y2="54" stroke="black"/>
            <line x1="2" y1="23.5" x2="61" y2="23.5" stroke="black"/>
            </svg>`,
        right: pos=>`<svg y="${pos}" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="61" height="61" fill="white" fill-opacity="0.5"/>
            <path d="M36.5 1.5C36.5 1.5 35.5834 19 38.5 22.5C41.4167 26 61 24.5 61 24.5" stroke="black"/>
            <path d="M36.5 60.6347C36.5 60.6347 35.5834 43.1347 38.5 39.6347C41.4167 36.1347 61 37.6347 61 37.6347" stroke="black"/>
            <line x1="30.5" y1="8" x2="30.5" y2="2" stroke="black"/>
            <line x1="30.5" y1="17" x2="30.5" y2="11" stroke="black"/>
            <line x1="30.5" y1="26" x2="30.5" y2="20" stroke="black"/>
            <line x1="30.5" y1="35" x2="30.5" y2="29" stroke="black"/>
            <line x1="30.5" y1="44" x2="30.5" y2="38" stroke="black"/>
            <line x1="30.5" y1="54" x2="30.5" y2="48" stroke="black"/>
            <line x1="39.7558" y1="30.8383" x2="35.3464" y2="30.8383" stroke="black"/>
            <line x1="50" y1="30.5" x2="44" y2="30.5" stroke="black"/>
            <line x1="60" y1="30.5" x2="54" y2="30.5" stroke="black"/>
            <line x1="23.5" y1="60" x2="23.5" y2="1" stroke="black"/>
            </svg>`,
        up: pos=>`<svg y="${pos}" width="62" height="63" viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="62.2698" width="61" height="61" transform="rotate(-90 0 62.2698)" fill="white" fill-opacity="0.5"/>
            <path d="M1.5 25.7698C1.5 25.7698 19 26.6865 22.5 23.7698C26 20.8531 24.5 1.26979 24.5 1.26979" stroke="black"/>
            <path d="M60.6347 25.7698C60.6347 25.7698 43.1347 26.6865 39.6347 23.7698C36.1347 20.8531 37.6347 1.26979 37.6347 1.26979" stroke="black"/>
            <line x1="8" y1="31.7698" x2="2" y2="31.7698" stroke="black"/>
            <line x1="17" y1="31.7698" x2="11" y2="31.7698" stroke="black"/>
            <line x1="26" y1="31.7698" x2="20" y2="31.7698" stroke="black"/>
            <line x1="35" y1="31.7698" x2="29" y2="31.7698" stroke="black"/>
            <line x1="44" y1="31.7698" x2="38" y2="31.7698" stroke="black"/>
            <line x1="54" y1="31.7698" x2="48" y2="31.7698" stroke="black"/>
            <line x1="30.8383" y1="22.514" x2="30.8383" y2="26.9234" stroke="black"/>
            <line x1="30.5" y1="12.2698" x2="30.5" y2="18.2698" stroke="black"/>
            <line x1="30.5" y1="2.26981" x2="30.5" y2="8.26981" stroke="black"/>
            <line x1="60" y1="38.7698" x2="1" y2="38.7698" stroke="black"/>
            </svg>`
    },
    specials: {
        overpass: pos=>`<svg y="${pos}" width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="1" width="61" height="61" fill="white" fill-opacity="0.5"/>
            <line x1="4.37114e-08" y1="37.5" x2="61" y2="37.5" stroke="black"/>
            <line x1="4.37114e-08" y1="24.5" x2="61" y2="24.5" stroke="black"/>
            <line x1="12" y1="31.5" x2="6" y2="31.5" stroke="black"/>
            <line x1="21" y1="31.5" x2="15" y2="31.5" stroke="black"/>
            <line x1="30" y1="31.5" x2="24" y2="31.5" stroke="black"/>
            <line x1="39" y1="31.5" x2="33" y2="31.5" stroke="black"/>
            <line x1="48" y1="31.5" x2="42" y2="31.5" stroke="black"/>
            <line x1="57" y1="31.5" x2="51" y2="31.5" stroke="black"/>
            <line x1="30.5" y1="38" x2="30.5" y2="62" stroke="black"/>
            <line x1="30.5" y1="-2.18557e-08" x2="30.5" y2="24" stroke="black"/>
            <line x1="37" y1="6.5" x2="25" y2="6.5" stroke="black"/>
            <line x1="37" y1="56.5" x2="25" y2="56.5" stroke="black"/>
            <line x1="37" y1="49.5" x2="25" y2="49.5" stroke="black"/>
            <line x1="37" y1="42.5" x2="25" y2="42.5" stroke="black"/>
            <line x1="37" y1="20.5" x2="25" y2="20.5" stroke="black"/>
            <line x1="37" y1="13.5" x2="25" y2="13.5" stroke="black"/>
            </svg>`,
        overpassVertical: pos=> `<svg y="${pos}" width="63" height="62" viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="61.5" y="0.5" width="61" height="61" transform="rotate(90 61.5 0.5)" fill="white" fill-opacity="0.5"/>
            <line x1="25" y1="0.5" x2="25" y2="61.5" stroke="black"/>
            <line x1="38" y1="0.5" x2="38" y2="61.5" stroke="black"/>
            <line x1="31" y1="12.5" x2="31" y2="6.5" stroke="black"/>
            <line x1="31" y1="21.5" x2="31" y2="15.5" stroke="black"/>
            <line x1="31" y1="30.5" x2="31" y2="24.5" stroke="black"/>
            <line x1="31" y1="39.5" x2="31" y2="33.5" stroke="black"/>
            <line x1="31" y1="48.5" x2="31" y2="42.5" stroke="black"/>
            <line x1="31" y1="57.5" x2="31" y2="51.5" stroke="black"/>
            <line x1="24.5" y1="31" x2="0.5" y2="31" stroke="black"/>
            <line x1="62.5" y1="31" x2="38.5" y2="31" stroke="black"/>
            <line x1="56" y1="37.5" x2="56" y2="25.5" stroke="black"/>
            <line x1="6" y1="37.5" x2="6" y2="25.5" stroke="black"/>
            <line x1="13" y1="37.5" x2="13" y2="25.5" stroke="black"/>
            <line x1="20" y1="37.5" x2="20" y2="25.5" stroke="black"/>
            <line x1="42" y1="37.5" x2="42" y2="25.5" stroke="black"/>
            <line x1="49" y1="37.5" x2="49" y2="25.5" stroke="black"/>
            </svg>`,
        stationConnectLeft: pos=>`<svg y="${pos}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="61" height="61" fill="white" fill-opacity="0.5"/>
            <line x1="39" y1="36.5" x2="61" y2="36.5" stroke="black"/>
            <line x1="39" y1="23.5" x2="61" y2="23.5" stroke="black"/>
            <line x1="48" y1="30.5" x2="42" y2="30.5" stroke="black"/>
            <line x1="57" y1="30.5" x2="51" y2="30.5" stroke="black"/>
            <line x1="24" y1="29.5" y2="29.5" stroke="black"/>
            <line x1="5.5" y1="36" x2="5.5" y2="24" stroke="black"/>
            <line x1="12.5" y1="36" x2="12.5" y2="24" stroke="black"/>
            <line x1="19.5" y1="36" x2="19.5" y2="24" stroke="black"/>
            <rect x="22" y="21" width="17" height="18" fill="black"/>
            </svg>`,
        stationConnectUp: pos=>`<svg y="${pos}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="61" y="2.86102e-06" width="61" height="61" transform="rotate(90 61 2.86102e-06)" fill="white" fill-opacity="0.5"/>
            <line x1="24.5" y1="39" x2="24.5" y2="61" stroke="black"/>
            <line x1="37.5" y1="39" x2="37.5" y2="61" stroke="black"/>
            <line x1="30.5" y1="48" x2="30.5" y2="42" stroke="black"/>
            <line x1="30.5" y1="57" x2="30.5" y2="51" stroke="black"/>
            <line x1="31.5" y1="24" x2="31.5" y2="-1.9292e-06" stroke="black"/>
            <line x1="25" y1="5.5" x2="37" y2="5.5" stroke="black"/>
            <line x1="25" y1="12.5" x2="37" y2="12.5" stroke="black"/>
            <line x1="25" y1="19.5" x2="37" y2="19.5" stroke="black"/>
            <rect x="40" y="22" width="17" height="18" transform="rotate(90 40 22)" fill="black"/>
            </svg>`,
        stationConnectRight: pos=>`<svg y="${pos}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="61" y="61" width="61" height="61" transform="rotate(-180 61 61)" fill="white" fill-opacity="0.5"/>
            <line x1="22" y1="24.5" x2="-5.94762e-08" y2="24.5" stroke="black"/>
            <line x1="22" y1="37.5" x2="-5.94762e-08" y2="37.5" stroke="black"/>
            <line x1="13" y1="30.5" x2="19" y2="30.5" stroke="black"/>
            <line x1="4" y1="30.5" x2="10" y2="30.5" stroke="black"/>
            <line x1="37" y1="31.5" x2="61" y2="31.5" stroke="black"/>
            <line x1="55.5" y1="25" x2="55.5" y2="37" stroke="black"/>
            <line x1="48.5" y1="25" x2="48.5" y2="37" stroke="black"/>
            <line x1="41.5" y1="25" x2="41.5" y2="37" stroke="black"/>
            <rect x="39" y="40" width="17" height="18" transform="rotate(-180 39 40)" fill="black"/>
            </svg>`,
        stationConnectDown: pos=>`<svg y="${pos}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="61" width="61" height="61" transform="rotate(-90 0 61)" fill="white" fill-opacity="0.5"/>
            <line x1="36.5" y1="22" x2="36.5" y2="-9.47583e-07" stroke="black"/>
            <line x1="23.5" y1="22" x2="23.5" y2="6.09093e-09" stroke="black"/>
            <line x1="30.5" y1="13" x2="30.5" y2="19" stroke="black"/>
            <line x1="30.5" y1="4" x2="30.5" y2="10" stroke="black"/>
            <line x1="29.5" y1="37" x2="29.5" y2="61" stroke="black"/>
            <line x1="36" y1="55.5" x2="24" y2="55.5" stroke="black"/>
            <line x1="36" y1="48.5" x2="24" y2="48.5" stroke="black"/>
            <line x1="36" y1="41.5" x2="24" y2="41.5" stroke="black"/>
            <rect x="21" y="39" width="17" height="18" transform="rotate(-90 21 39)" fill="black"/>
            </svg>`,
        stationCornerConnectLeft: pos=>`<svg y="${pos}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="61" height="61" fill="white" fill-opacity="0.5"/>
            <line x1="24" y1="38.5" x2="24" y2="60.5" stroke="black"/>
            <line x1="37" y1="38.5" x2="37" y2="60.5" stroke="black"/>
            <line x1="30" y1="47.5" x2="30" y2="41.5" stroke="black"/>
            <line x1="30" y1="56.5" x2="30" y2="50.5" stroke="black"/>
            <line x1="24" y1="29.5" y2="29.5" stroke="black"/>
            <line x1="5.5" y1="36" x2="5.5" y2="24" stroke="black"/>
            <line x1="12.5" y1="36" x2="12.5" y2="24" stroke="black"/>
            <line x1="19.5" y1="36" x2="19.5" y2="24" stroke="black"/>
            <rect x="22" y="21" width="17" height="18" fill="black"/>
            </svg>`,
        stationCornerConnectUp: pos=>`<svg y="${pos}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="61" y="2.86102e-06" width="61" height="61" transform="rotate(90 61 2.86102e-06)" fill="white" fill-opacity="0.5"/>
            <line x1="22.5" y1="24" x2="0.499999" y2="24" stroke="black"/>
            <line x1="22.5" y1="37" x2="0.499998" y2="37" stroke="black"/>
            <line x1="13.5" y1="30" x2="19.5" y2="30" stroke="black"/>
            <line x1="4.5" y1="30" x2="10.5" y2="30" stroke="black"/>
            <line x1="31.5" y1="24" x2="31.5" y2="-1.9292e-06" stroke="black"/>
            <line x1="25" y1="5.5" x2="37" y2="5.5" stroke="black"/>
            <line x1="25" y1="12.5" x2="37" y2="12.5" stroke="black"/>
            <line x1="25" y1="19.5" x2="37" y2="19.5" stroke="black"/>
            <rect x="40" y="22" width="17" height="18" transform="rotate(90 40 22)" fill="black"/>
            </svg>`,
        stationCornerConnectRight: pos=>`<svg y="${pos}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="61" y="61" width="61" height="61" transform="rotate(-180 61 61)" fill="white" fill-opacity="0.5"/>
            <line x1="37" y1="22.5" x2="37" y2="0.500002" stroke="black"/>
            <line x1="24" y1="22.5" x2="24" y2="0.500001" stroke="black"/>
            <line x1="31" y1="13.5" x2="31" y2="19.5" stroke="black"/>
            <line x1="31" y1="4.5" x2="31" y2="10.5" stroke="black"/>
            <line x1="37" y1="31.5" x2="61" y2="31.5" stroke="black"/>
            <line x1="55.5" y1="25" x2="55.5" y2="37" stroke="black"/>
            <line x1="48.5" y1="25" x2="48.5" y2="37" stroke="black"/>
            <line x1="41.5" y1="25" x2="41.5" y2="37" stroke="black"/>
            <rect x="39" y="40" width="17" height="18" transform="rotate(-180 39 40)" fill="black"/>
            </svg>`,
        stationCornerConnectDown: pos=>`<svg y="${pos}" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="61" width="61" height="61" transform="rotate(-90 0 61)" fill="white" fill-opacity="0.5"/>
            <line x1="38.5" y1="37" x2="60.5" y2="37" stroke="black"/>
            <line x1="38.5" y1="24" x2="60.5" y2="24" stroke="black"/>
            <line x1="47.5" y1="31" x2="41.5" y2="31" stroke="black"/>
            <line x1="56.5" y1="31" x2="50.5" y2="31" stroke="black"/>
            <line x1="29.5" y1="37" x2="29.5" y2="61" stroke="black"/>
            <line x1="36" y1="55.5" x2="24" y2="55.5" stroke="black"/>
            <line x1="36" y1="48.5" x2="24" y2="48.5" stroke="black"/>
            <line x1="36" y1="41.5" x2="24" y2="41.5" stroke="black"/>
            <rect x="21" y="39" width="17" height="18" transform="rotate(-90 21 39)" fill="black"/>
            </svg>`
    }
}

const diceSelection = {
    crossSectionRail: 4,
    curvedRail: 8,
    straightRail: 8,
    straightRoad: 8,
    curvedRoad: 8,
    triJunction: 4,
    specials: 6
}
// console.log(Object.values(diceSelection).reduce((a,b)=>a+b));

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

const svgCollection = [];
Object.keys(rawSvgCollection).forEach((type, key) => {
    // each tile type
    const cachedTileSet = Object.keys(rawSvgCollection[type]);    
    // number of tiles to pick from
    const tilesLen = cachedTileSet.length;
    for(let i=0;i<diceSelection[type];i++){
        // each of the number of picks needed
        const pick = Math.floor(Math.random() * tilesLen);
        svgCollection.push(rawSvgCollection[type][cachedTileSet[pick]]);
    }
});

// randomise array 
const shuffledSvg = shuffle(svgCollection);
let yInc = -62;
const renderedSvgCollection = shuffledSvg.map(func => {
    return func(yInc += 62);
})
console.log(renderedSvgCollection);
document.querySelector('#tst').innerHTML = '<svg style="height: 3000px;" fill="none" xmlns="http://www.w3.org/2000/svg">' + renderedSvgCollection.join() + '</svg>';
