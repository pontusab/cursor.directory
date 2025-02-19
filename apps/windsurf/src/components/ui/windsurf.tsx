export function Windsurf() {
  return (
    <svg width="60" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity=".1">
        <g filter="url(#a)">
          <path
            d="m17.304 54.18-4.29-12.058c-.749-2.103.765-4.336 2.918-4.234 24.043 1.127 36.378 9.906 35.229 35.22C46.979 55.43 26.924 54.18 17.304 54.18Z"
            fill="#fff"
          />
        </g>
        <g filter="url(#b)">
          <path
            d="M10.823 31.99 6.356 20.305c-.808-2.115.705-4.411 2.892-4.385 24.554.295 41.698 1.962 41.698 34.782-4.182-17.68-30.503-18.714-40.123-18.714Z"
            fill="#fff"
          />
        </g>
        <g filter="url(#c)">
          <path
            d="m23.95 77.082-4.602-12.903c-.746-2.093.747-4.32 2.889-4.206 19.616 1.045 29.427 9.608 28.291 34.63-4.181-17.68-16.888-17.521-26.577-17.521Z"
            fill="#fff"
          />
        </g>
      </g>
      <defs>
        <filter
          id="a"
          x="12.82"
          y="37.884"
          width="38.415"
          height="39.224"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_117_4043" />
        </filter>
        <filter
          id="b"
          x="6.136"
          y="15.921"
          width="44.81"
          height="38.782"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_117_4043" />
        </filter>
        <filter
          id="c"
          x="19.153"
          y="59.969"
          width="31.463"
          height="38.634"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_117_4043" />
        </filter>
      </defs>
    </svg>
  );
}
