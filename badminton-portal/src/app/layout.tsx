import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "THE COURT - バドミントンポータル",
    template: "%s | THE COURT",
  },
  description: "試合速報、選手名鑑、ギア紹介、サークル検索、初心者ガイドなど、バドミントン競技のすべてを網羅した専門ポータルサイトです。",
  keywords: ["バドミントン", "Badminton", "選手名鑑", "バドミントンサークル", "バドミントン初心者", "桃田賢斗"],
  openGraph: {
    title: "THE COURT - バドミントンポータル",
    description: "バドミントンのすべてが集まる場所。世界と日本の「現在地」を把握する専門プラットフォーム。",
    url: "https://badminton-portal.jp", // Placeholder
    siteName: "THE COURT",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE COURT",
    description: "バドミントンのすべてが集まる場所。専門ポータルサイト「THE COURT」",
  },
};

import LiveTicker from "@/components/LiveTicker";
import BreakingNews from "@/components/BreakingNews";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BreakingNews />
        <LiveTicker />
        {children}
        <Script
          id="amplitude-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){"use strict";!function(e,t){var n=e.amplitude||{_q:[],_iq:{}};if(n.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{var r=function(e,t){e.prototype[t]=function(){return this._q.push({name:t,args:Array.prototype.slice.call(arguments,0)}),this}},s=function(e,t,n){return function(r){e._q.push({name:t,args:Array.prototype.slice.call(r,0),resolve:n})}},o=function(e,t,n){e[t]=function(){if(n)return{promise:new Promise(s(e,t))};s(e,t)()}},i=function(e){for(var t=0;t<m.length;t++)o(e,m[t],!1);for(var n=0;n<g.length;n++)o(e,g[n],!0)};n.invoked=!0;var u=t.createElement("script");u.type="text/javascript",u.integrity="sha384-x0ik2D45ZDE//YpFd/OQy/8kG7uT9G/n32C2b1oH8N6Q6r5xXw5Y0r1G/aC7eX28",u.crossOrigin="anonymous",u.async=!0,u.src="https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz",u.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};var a=t.getElementsByTagName("script")[0];a.parentNode.insertBefore(u,a);for(var c=function(){return this._q=[],this},p=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"],l=0;l<p.length;l++)r(c,p[l]);n.Identify=c;for(var d=function(){return this._q=[],this},f=["getEventProperties","setProductId","setQuantity","setPrice","setRevenue","setRevenueType","setEventProperties"],v=0;v<f.length;v++)r(d,f[v]);n.Revenue=d;var m=["getDeviceId","setDeviceId","getSessionId","setSessionId","getUserId","setUserId","setOptOut","setTransport","reset","extendSession"],g=["init","add","remove","track","logEvent","identify","groupIdentify","setGroup","revenue","flush"];i(n),n.createInstance=function(e){return n._iq[e]={_q:[]},i(n._iq[e]),n._iq[e]},e.amplitude=n}}(window,document)}();
              
              amplitude.init('36897c69c2ac2bc72d6a497e56431c1d', {"autocapture":{"elementInteractions":true}});
            `,
          }}
        />
      </body>
    </html>
  );
}
