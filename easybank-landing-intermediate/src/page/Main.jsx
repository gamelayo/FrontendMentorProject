import React from "react";
import image from "../images/image-mockups.png";
import onlineBank from "../images/icon-online.svg";
import budgeting from "../images/icon-budgeting.svg";
import Onboarding from "../images/icon-onboarding.svg";
import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import confetti from "../images/image-confetti.jpg";
import plane from "../images/image-plane.jpg";

import API from "../images/icon-api.svg";
import "./MainStyle.css";
const Main = () => {
  return (
    <main className="w-full mt-16">
      {/* Hero section */}
      <div className="hero-section bg-[#fafafa] py-6">
        <div className="hero-img py-8">
          <img src={image} alt="phone-mockup" className="hero-img-top" />
        </div>
        <div className="hero-intro container">
          <h1>Next generation digital banking</h1>
          <p className="">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button class=" cursor-pointer rounded-full py-2 px-4">
            Request Invite
          </button>
        </div>
      </div>
      {/* Second Section */}
      <div className="bg-[#f3f4f6]">
        <div className="w-[85%] mx-auto py-20">
          <div className="my-10">
            <h1 className="md:text-start"> Why choose Easybank?</h1>
            <p className="text-center md:text-start">
              We leverage Open Banking to turn your bank account into your
              financial hub.
            </p>
            <p className="text-center md:text-start">
              {" "}
              Control your finances like never before.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 my-10">
            <div className="flex flex-col items-center md:items-start">
              <img src={onlineBank} alt="" className="w-[72px] h-[72px]" />
              <h2 className="my-3">Online Banking</h2>
              <p className="text-center md:text-start">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <img src={budgeting} alt="" className="w-[72px] h-[72px]" />
              <h2 className="my-3">Simple Budgeting</h2>
              <p className="text-center md:text-start">
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <img src={Onboarding} alt="" className="w-[72px] h-[72px]" />
              <h2 className="my-3">Fast Onboarding</h2>
              <p className="text-center md:text-start">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <img src={API} alt="" className="w-[72px] h-[72px]" />
              <h2 className="my-3">Open API</h2>
              <p className="text-center md:text-start">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Third Section */}
      <div className="bg-[#fafafa]">
        <div className="w-[85%] mx-auto py-20">
          <h1 className="md:text-start my-6">Latest Articles</h1>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 my-10">
            <div className="bg-[#ffff]">
              <img src={currency} alt="" />
              <div className="p-4">
                <span className="text-[#9698a6]">By Claire Robinson</span>
                <h3 className="my-1">
                  Receive money in any currency with no fees
                </h3>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </div>
            <div className="bg-[#ffff]">
              <img src={restaurant} alt="/" />
              <div className="p-4">
                <span className="text-[#9698a6]">By Wilson Hutton</span>
                <h3 className="my-1">
                  Treat yourself without worrying about money
                </h3>
                <p>
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </p>
              </div>
            </div>
            <div className="bg-[#ffff]">
              <img src={plane} alt="/" />
              <div className="p-4">
                <span className="text-[#9698a6]">By Wilson Hutton</span>
                <h3 className="my-1">
                  Take your Easybank card wherever you go
                </h3>
                <p>
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </p>
              </div>
            </div>
            <div className="bg-[#ffff]">
              <img src={confetti} alt="/" />
              <div className="p-4">
                <span className="text-[#9698a6]">By Claire Robinson</span>
                <h3 className="my-1">
                  Our invite-only Beta accounts are now live!
                </h3>
                <p>
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
