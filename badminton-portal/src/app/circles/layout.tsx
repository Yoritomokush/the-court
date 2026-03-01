import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CIRCLES | THE COURT",
    description: "Discover local badminton communities and clubs recruiting members.",
};

export default function CirclesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
