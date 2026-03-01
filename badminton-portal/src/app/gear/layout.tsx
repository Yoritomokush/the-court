import { Metadata } from "next";

export const metadata: Metadata = {
    title: "GEAR | THE COURT",
    description: "Discover professional badminton gear curated by elite athletes.",
};

export default function GearLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
