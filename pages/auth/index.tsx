import React from "react";
import Image from "next/image";
import Artboard from "@/public/assets/auth/Artboard.png";
import Logo from "@/public/assets/auth/logo.svg";
import Google from "@/public/assets/icon/Google.svg";
import Twitter from "@/public/assets/icon/Twitter.svg";
import PageIndicator from "@/public/assets/icon/pageIndicator.svg";
import Link from "next/link";

const Auth: React.FC = () => {
  
  return (
    <div className="min-h-screen lg:grid md:grid lg:grid-cols-2">
      <div className="hidden md:flex py-2 bg-[#3F3849] justify-center items-center">
        <div className="text-center">
          <Image src={Artboard} width={400} height={480} alt="Artboard" />
          <div className="mb-10">
            <h4 className="text-[2.5rem] lg:text-[3rem] font-bold text-white">
              Wetin<span className="text-[#884ED0]">Dey</span>Sup
            </h4>
            <p className="mt-4 text-gray-400 text-[1.15rem] lg:text-[1.25rem]">
              All your events in one place,
              <br /> connect and socialize
            </p>
            <div className="hidden lg:flex mt-6 w-full justify-center">
              <Image src={PageIndicator} width={80} alt="Page Indicator" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:bg-[#F7F6F8] bg-[#3F3849] md:pt-14">
        <Image src={Logo} className="pl-8 hidden md:flex" width={200} height={60} alt="Logo" />
        <div className="px-8 md:px-12 lg:px-16 mb-6 flex justify-center items-center min-h-screen md:min-h-full lg:min-h-[500px] xl:h-[80%]">
          <Link href='/'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="23" viewBox="0 0 28 23" fill="none" className="md:hidden mb-8">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.3161 22.3257C12.8785 22.7575 12.2851 23 11.6664 23C11.0476 23 10.4543 22.7575 10.0167 22.3257L0.683181 13.1142C0.245741 12.6824 0 12.0967 0 11.4861C0 10.8755 0.245741 10.2898 0.683181 9.85796L10.0167 0.646446C10.4568 0.226958 11.0462 -0.00515987 11.658 8.70545e-05C12.2698 0.00533398 12.855 0.247526 13.2876 0.674498C13.7203 1.10147 13.9657 1.67906 13.971 2.28287C13.9763 2.88668 13.7411 3.46839 13.3161 3.90272L7.96564 9.18322H25.6666C26.2855 9.18322 26.879 9.42584 27.3166 9.85772C27.7542 10.2896 28 10.8753 28 11.4861C28 12.0969 27.7542 12.6826 27.3166 13.1145C26.879 13.5464 26.2855 13.789 25.6666 13.789H7.96564L13.3161 19.0695C13.7535 19.5013 13.9993 20.087 13.9993 20.6976C13.9993 21.3083 13.7535 21.8939 13.3161 22.3257Z" fill="white"/>
            </svg>
            <div className="max-w-[311px] shrink-0 md:hidden">
              <h1 className="text-[28px] font-bold text-white">Welcome on Board!</h1>
              <p className="text-[#8C8896] text-base font-medium">Were glad you&#8217;re here</p>
            </div>
            <Image
              src={Artboard}
              width={400}
              height={480}
              alt="Artboard"
              className="md:hidden mx-auto"
            />
            <h4 className="font-bold text-[1.5rem] md:ext-[2rem] hidden md:flex">
              Welcome on Board!
            </h4>
            <p className="mt-3 text-[0.8rem] md:text-[1rem] text-gray-600 hidden md:flex">
              We&#8217;re glad you&#8217;re here. Discover, Create, and Share
              Memorable Moments with a Thriving Community of Event Lovers.
            </p>
            <div className="mt-5 lg:pr-20 xl:pr-40">
            <Link href="/timeline">
              <button className="flex text-sm md:text-md justify-center items-center gap-2 w-full bg-white hover:bg-gray-100 py-4 border border-gray-400 font-semibold rounded-xl">
                <Image
                  src={Google}
                  width={23}
                  height={23}
                  className="mr-3 hidden md:flex"
                  alt="Google SVG"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex md:hidden">
                  <g clipPath="url(#clip0_4_3372)">
                    <path d="M26.1814 0.968333C28.8556 0.968333 31.0317 3.14445 31.0317 5.81862V26.1823C31.0317 28.8565 28.8556 31.0317 26.1814 31.0317H5.81766C4.52176 31.0317 3.3044 30.5269 2.38875 29.6113C1.47309 28.6956 0.968333 27.4773 0.968333 26.1823V5.81862C0.968333 3.14445 3.14349 0.968333 5.81766 0.968333H26.1814ZM26.1814 0H5.81766C2.60425 0 0 2.60521 0 5.81862V26.1823C0 29.3957 2.60425 32 5.81766 32H26.1814C29.3948 32 32 29.3957 32 26.1823V5.81862C32 2.60521 29.3948 0 26.1814 0Z" fill="black"/>
                    <path d="M27.234 13.7681H16.0326V18.1682H22.7812C22.3052 19.6566 21.3532 20.9324 20.1042 21.8165C18.9443 22.6373 17.5287 23.1181 16.001 23.1181C12.9092 23.1181 10.2772 21.146 9.29545 18.3914C9.02918 17.6443 8.88359 16.8388 8.88359 16.0007C8.88359 15.0745 9.05983 14.1895 9.3826 13.3783C10.4266 10.7453 12.9964 8.88333 16.001 8.88333C17.7049 8.88333 19.269 9.48291 20.494 10.4809L23.5887 7.42269C21.5677 5.63448 18.9117 4.54834 16.001 4.54834C11.6449 4.54834 7.85683 6.98114 5.92017 10.5614C5.0457 12.1791 4.54956 14.0315 4.54956 15.9998C4.54956 17.968 5.01313 19.6969 5.83492 21.2753C7.74286 24.9456 11.5807 27.4521 16.0019 27.4521C18.928 27.4521 21.5964 26.3545 23.6212 24.55C25.9736 22.4515 27.4543 19.399 27.4543 15.9998C27.4543 15.2354 27.3796 14.4893 27.2359 13.7671L27.234 13.7681Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_4_3372">
                      <rect width="32" height="32" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                Continue with Google
              </button>
            </Link>

            <Link href="/timeline">
              <button className="mt-5 flex text-sm items-center gap-2 md:text-md justify-center w-full bg-red-300 hover:bg-red-300/90 py-4 font-semibold rounded-xl">
                <Image
                  src={Twitter}
                  width={23}
                  height={23}
                  className="mr-3 hidden md:flex"
                  alt="Twitter SVG"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex md:hidden">
                  <g clip-path="url(#clip0_4_3395)">
                    <path d="M26.1814 0.968333C28.8556 0.968333 31.0317 3.14445 31.0317 5.81862V26.1823C31.0317 28.8565 28.8556 31.0317 26.1814 31.0317H5.81766C4.52176 31.0317 3.3044 30.5269 2.38875 29.6113C1.47309 28.6956 0.968333 27.4773 0.968333 26.1823V5.81862C0.968333 3.14445 3.14349 0.968333 5.81766 0.968333H26.1814ZM26.1814 0H5.81766C2.60425 0 0 2.60521 0 5.81862V26.1823C0 29.3957 2.60425 32 5.81766 32H26.1814C29.3948 32 32 29.3957 32 26.1823V5.81862C32 2.60521 29.3948 0 26.1814 0Z" fill="black"/>
                    <path d="M10.486 26.1977C9.31459 26.1709 8.93338 26.0426 8.44874 25.9372C7.44114 25.7169 6.46897 25.3865 5.53321 24.9535C4.99397 24.7045 4.47005 24.4229 3.96529 24.1078C3.90591 24.0705 3.84461 24.0331 3.84174 23.9507C3.86185 23.9067 3.89825 23.9038 3.94039 23.9095C4.34841 23.9574 4.75739 23.9661 5.16733 23.9641C5.83587 23.9613 6.49579 23.8789 7.14901 23.7419C8.0819 23.5465 8.96595 23.2171 9.80594 22.7688C10.2647 22.5236 10.7015 22.2439 11.1239 21.925C11.0089 21.8819 10.895 21.8934 10.7858 21.88C9.82893 21.7631 8.9717 21.4049 8.21887 20.8053C7.467 20.2067 6.9201 19.4548 6.59444 18.5478C6.50537 18.3007 6.53123 18.2911 6.80708 18.3361C7.36068 18.4262 7.92674 18.4156 8.47652 18.3016C8.52536 18.2911 8.5723 18.2834 8.63264 18.2739C8.08478 18.1369 7.58193 17.9204 7.11453 17.6206C6.47855 17.2117 5.95559 16.6897 5.54949 16.0508C5.12135 15.3784 4.86945 14.6448 4.78612 13.8536C4.76984 13.6946 4.75356 13.5347 4.75931 13.3738C4.76505 13.2081 4.79857 13.1899 4.95278 13.2722C5.20947 13.4092 5.47957 13.5174 5.75637 13.6056C5.89334 13.6487 6.0303 13.6898 6.1711 13.7186C6.4048 13.7674 6.64042 13.8086 6.89807 13.8259C6.77547 13.7148 6.65287 13.6276 6.54081 13.5289C6.11267 13.1544 5.75637 12.7206 5.47286 12.2282C5.11848 11.6124 4.89819 10.9505 4.82731 10.2447C4.73249 9.31176 4.86658 8.41239 5.26694 7.55803C5.32536 7.43448 5.38762 7.31284 5.45371 7.19311C5.51022 7.09063 5.55045 7.08775 5.62515 7.17874C5.98145 7.61167 6.36266 8.02256 6.76781 8.41047C7.33099 8.95067 7.93536 9.44106 8.579 9.8826C9.80594 10.7245 11.1306 11.3634 12.5558 11.7905C13.3594 12.0309 14.1783 12.2005 15.0125 12.2943C15.2462 12.3212 15.4799 12.3528 15.7165 12.3556C15.8468 12.3566 15.8659 12.3346 15.841 12.2024C15.7816 11.8825 15.7519 11.5588 15.7567 11.235C15.7701 10.2992 16.0163 9.42765 16.5048 8.62693C16.9473 7.90092 17.5373 7.32146 18.2671 6.88853C18.7345 6.61173 19.2326 6.40676 19.768 6.29949C19.9835 6.25639 20.2047 6.25543 20.4241 6.24393C20.4442 6.24298 21.0026 6.2334 21.2621 6.2334C21.4566 6.25543 21.6539 6.25064 21.8464 6.27842C22.195 6.32918 22.5274 6.4422 22.8511 6.57916C23.4488 6.83298 23.9852 7.18066 24.4401 7.64711C24.5302 7.73905 24.625 7.75821 24.7466 7.73043C25.7399 7.50631 26.6833 7.15097 27.5683 6.64525C27.6066 6.62322 27.6449 6.59832 27.6871 6.58587C27.7464 6.56863 27.7924 6.60885 27.7828 6.67015C27.7733 6.72666 27.7522 6.78126 27.7321 6.83489C27.4955 7.46225 27.1545 8.02448 26.6957 8.51679C26.44 8.79072 26.1622 9.03495 25.8567 9.2495C25.8117 9.28111 25.7657 9.31463 25.7111 9.32996C25.6977 9.33379 25.7197 9.34528 25.713 9.33379C25.7102 9.329 25.7102 9.32517 25.7149 9.32421C25.9381 9.27153 26.1651 9.2428 26.3902 9.19682C27.052 9.06081 27.6928 8.85776 28.3144 8.59437C28.3441 8.58192 28.3757 8.5551 28.4073 8.58096C28.4408 8.60873 28.4198 8.64513 28.4121 8.67865C28.3997 8.73516 28.3709 8.78305 28.3393 8.82903C27.9418 9.40083 27.485 9.92187 26.9792 10.3989C26.7082 10.6546 26.4285 10.9007 26.1239 11.1153C25.9937 11.2063 25.9592 11.3193 25.9764 11.4687C26.0023 11.7005 26.0099 11.9332 25.9831 12.1641C25.9601 12.3643 25.9697 12.5654 25.9554 12.7665C25.9132 13.3709 25.8347 13.9686 25.7188 14.5634C25.5215 15.5729 25.2207 16.5517 24.8213 17.499C24.398 18.5037 23.8712 19.452 23.2438 20.3446C22.6874 21.1358 22.0581 21.8637 21.3541 22.5255C20.5017 23.3272 19.5611 24.0101 18.5305 24.5695C17.7892 24.9717 17.0182 25.3022 16.2165 25.5637C15.3497 25.8462 14.4627 26.0397 13.5576 26.1508C13.3335 26.1786 12.2924 26.2379 10.4888 26.1968L10.486 26.1977Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_4_3395">
                      <rect width="32" height="32" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                Continue with Twitter
              </button>
            </Link>
            </div>
            <p className="mt-6 text-[1rem] text-white md:text-gray-600">
              By continuing, you agree with our{" "}
              <span className="font-semibold text-[#8C8896] md:text-black">privacy policy</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
