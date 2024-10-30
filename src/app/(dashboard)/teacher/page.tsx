import Announcement from "@/components/Announcement"
import BigCalendar from "@/components/BigCalendar"

const TeacherPage = () => {
    return (
        <div className='flex-1 p-4 flex gap-4 flex-col xl:flex-row'>
            {/* LEFT */}
            <div className="w-full xl:w-2/2">
                <div className="h-full bg-white p-4 rounded-md">
                    <h1 className="text-xl font-semibold">Schedule</h1>
                    <BigCalendar/>
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-8">
                <Announcement/>
            </div>
        </div>
    )
}

export default TeacherPage;