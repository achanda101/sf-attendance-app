import { useState, useEffect } from 'react'
import { account } from "../appwriteConfig";
import { toast } from 'react-toastify';

function CheckInStatus() {
    // const userPrefs = await account.getPrefs();

    // const [ employeePrefs, setEmployeePrefs ] = useState({
    //     status: userPrefs.checkInStatus ? 'Checked In' : 'Checked Out',
    //     lastCheckIn: userPrefs.checkInTime || 'N/A',
    //     lastCheckOut: userPrefs.checkOutTime || 'N/A'
    // })
    // const [ employeePrefs, setEmployeePrefs ] = useState(null)

    const [ isCheckedIn, setIsCheckedIn ] = useState(false);
    const [ checkInTime, setCheckInTime ] = useState(null);
    const [ checkOutTime, setCheckOutTime ] = useState(null);
    const [ elapsedTime, setElapsedTime ] = useState('00:00:00');
    const [ loading, setLoading ] = useState(false)

    // Timer effect
    useEffect(() => {
        let interval = null;

        if (isCheckedIn && checkInTime) {
            interval = setInterval(() => {
                const now = new Date();
                const checkIn = new Date(checkInTime);
                const diff = now - checkIn;

                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                setElapsedTime(
                    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
                );
            }, 1000);
        } else {
            setElapsedTime('00:00:00');
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [ isCheckedIn, checkInTime ]);


    useEffect(() => {
        fetchEmployeeData();
    }, [ isCheckedIn, checkInTime, checkOutTime ]);

    const fetchEmployeeData = async () => {
        setLoading(true);
        try {
            let response = await account.getPrefs();
            setIsCheckedIn(response.checkInStatus);
            setCheckInTime(response.checkInTime || 'N/A');
            setCheckOutTime(response.checkOutTime || 'N/A');
        } catch (error) {
            toast.error(`Failed to fetch employee data: ${error.message || error}`, {
                position: "bottom-right"
            });
        } finally {
            setLoading(false);
        }
    };

    const checkInClick = async () => {
        setLoading(true);
        try {
            // Toggle status
            const newStatus = !isCheckedIn;
            // Convert current time to IST and human-readable format
            const now = new Date();
            const istDate = new Date(now.getTime());
            const humanReadableIST = istDate.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });

            // Update user preferences in Appwrite
            await account.updatePrefs({
                checkInStatus: newStatus,
                checkInTime: newStatus ? humanReadableIST : checkInTime,
                checkOutTime: !newStatus ? humanReadableIST : checkOutTime
            });

            setIsCheckedIn(newStatus);
            setCheckInTime(newStatus ? humanReadableIST : checkInTime);
            setCheckOutTime(!newStatus ? humanReadableIST : checkOutTime);

            toast.success(`Successfully ${newStatus ? 'checked in' : 'checked out'}.`, {
                position: "bottom-right"
            });
        } catch (error) {
            toast.error(`Failed to update Check-In status: ${error.message || error}`, {
                position: "bottom-right"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center mt-2">
            <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-1.5">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                                <span className="text-s font-medium text-gray-700">STATUS:</span>
                                <span className="text-s font-bold text-red-500">
                                    {isCheckedIn ? "Checked-In" : "Checked-Out"}
                                </span>
                            </div>
                            <div className="text-xs text-gray-600 space-y-0">
                                {isCheckedIn ? (
                                    <>
                                        <div>Checked-In at: {checkInTime}</div>
                                        <div className="text-2xl font-bold text-blue-600">{elapsedTime}</div>
                                    </>
                                ) : (
                                    <>
                                        <div>Last Check-In: {checkInTime}</div>
                                        <div>Last Check-Out: {checkOutTime}</div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Check-In/Check-Out Button */}
                        <button
                            className={`${isCheckedIn
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-green-600 hover:bg-green-700"
                                } text-white px-3 py-2 rounded-lg font-medium transition-colors`}
                            onClick={checkInClick}
                        >
                            {isCheckedIn ? "Check-Out" : "Check-In"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckInStatus