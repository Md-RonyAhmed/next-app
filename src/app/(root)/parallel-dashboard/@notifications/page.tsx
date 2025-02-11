import Link from "next/link";
// import wait from "../../lib/wait";

export default async function NotificationsPage() {
  // await wait(2000);
  // throw new Error("An error occurred");
  return (
    <div className="text-xl p-4 row-span-2 border border-gray-400 rounded h-[745px] flex gap-5 items-center justify-center">
            <span>ALL NOTIFICATIONS</span>
            <div>
                <Link href="/parallel-dashboard/seen" className="text-blue-400">
                    SEEN
                </Link>
            </div>
        </div>
  );
}
