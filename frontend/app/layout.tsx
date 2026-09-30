import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DrTAPhysio | Dr. Talha Parkar",
  description: "Premium physiotherapy, rehabilitation, and tele-rehabilitation care in Mumbai by Dr. Talha Parkar.",
  openGraph: {
    title: "DrTAPhysio | Dr. Talha Parkar",
    description: "Structured physiotherapy, rehabilitation, tele-rehab programs, patient portal and clinician-led recovery tracking.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ "--asset-base": process.env.NEXT_PUBLIC_BASE_PATH ?? "" } as React.CSSProperties}>{children}</body>
    </html>
  );
}
