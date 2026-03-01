import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SCHEDULE | THE COURT",
    description: "Upcoming elite badminton tournaments and events in 2026.",
};

export default function ScheduleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
