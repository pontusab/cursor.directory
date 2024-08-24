export function Footer() {
  return (
    <footer className="right-4 bottom-4 absolute text-xs z-10">
      <a href="https://midday.ai" target="_blank" rel="noreferrer">
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            fill="none"
            className="scale-[0.60]"
            aria-label="Made by Midday"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M19.13 0a19.908 19.908 0 0 0-8.376 2.24l8.376 14.507V0Zm0 23.255-8.375 14.506A19.909 19.909 0 0 0 19.129 40V23.255ZM20.87 40V23.244l8.38 14.514A19.907 19.907 0 0 1 20.87 40Zm0-23.241V0c3.014.129 5.856.924 8.381 2.243l-8.38 14.516ZM3.114 30.757l14.511-8.378-8.377 14.51a20.125 20.125 0 0 1-6.134-6.132ZM36.89 9.247 22.38 17.623l8.377-14.508a20.125 20.125 0 0 1 6.13 6.132ZM3.113 9.245a20.125 20.125 0 0 1 6.134-6.133l8.379 14.513-14.513-8.38Zm-.872 1.507A19.909 19.909 0 0 0 0 19.133h16.757l-14.516-8.38Zm.001 18.498A19.91 19.91 0 0 1 0 20.875h16.751L2.242 29.25Zm21.006-10.117H40a19.909 19.909 0 0 0-2.24-8.379l-14.512 8.38Zm14.51 10.116-14.504-8.375H40a19.909 19.909 0 0 1-2.241 8.375ZM22.383 22.38l8.375 14.505a20.126 20.126 0 0 0 6.13-6.13L22.382 22.38Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </a>
    </footer>
  );
}
