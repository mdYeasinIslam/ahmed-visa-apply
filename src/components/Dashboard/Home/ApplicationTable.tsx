import { useUpdateApplicationStatusMutation } from "@/redux/service/applyForm/visaApi";
import { ApplicationType } from "@/types/application";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

// Reusable Badge component
const StatusBadge = ({ status }: { status: string }) => {
    let color = "";
    let bg = "";
    switch (status) {
        case "PROCESSING":
            color = "text-blue-600";
            bg = "bg-blue-100";
            break;
        case "APPROVED":
            color = "text-green-600";
            bg = "bg-green-100";
            break;
        case "Pending":
            color = "text-orange-600";
            bg = "bg-orange-100";
            break;
        case "REJECTED":
            color = "text-red-600";
            bg = "bg-red-100";
            break;
        default:
            color = "text-gray-600";
            bg = "bg-gray-100";
    }
    return (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${color} ${bg}`}>
            {status}
        </span>
    );
};


type PropType = {
    title: string,
    applications: ApplicationType[]
    totalPage: number
    totalData: number
    currentPage: number
    setPageForPagination: React.Dispatch<React.SetStateAction<number>>
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    setStatus: React.Dispatch<React.SetStateAction<string>>
    refetch: () => void
}

const ApplicationTable = ({ title, applications, totalPage, setPageForPagination, totalData, currentPage, setSearchTerm, setStatus ,refetch}: PropType) => {
    const [updateApplicationStatus] = useUpdateApplicationStatusMutation()
    const onChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === 'all') {
            setStatus('')
        } 
        else {
            setStatus(e.target.value)
        }
    }
    const handleUpdateStatus = async(status:string,id:string) => {
        
      const res = await updateApplicationStatus({id,body:{status}})
        console.log(res)
        if(res?.data?.success){
            toast.success(res?.data?.message)
            refetch()
        }
    }
    return (
        <div className="">
            <h2 className="text-xl font-semibold mb-6">{title}</h2>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <input
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search Applications..."
                    className="border rounded px-4 py-2 w-full md:w-80 focus:outline-none"
                />
                <div className="flex gap-3">
                    <button className="border rounded px-4 py-2 bg-white hover:bg-gray-50">
                        Export CSV or Excel
                    </button>
                    <select
                        className="border rounded px-4 py-2 flex items-center gap-2 bg-white hover:bg-gray-50 focus:outline-none"
                        onChange={onChangeStatus}
                        defaultValue=""
                    >
                        <option value="" disabled hidden>Filter</option>
                        <option value="PENDING">PENDING</option>
                        <option value="PROCESSING">PROCESSING</option>
                        <option value="APPROVED">APPROVED</option>
                        <option value="REJECTED">REJECTED</option>
                        <option value="all">All</option>
                    </select>
                </div>
            </div>
            <div className=" rounded-t-lg overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr className="text-white text-left bg-[#232C54]">
                            <th className="px-4 py-5 font-medium">User Name</th>
                            <th className="px-4 py-5 font-medium">Date submitted</th>
                            <th className="px-4 py-5 font-medium">Email</th>
                            <th className="px-4 py-5 font-medium">Address</th>
                            <th className="px-4 py-5 font-medium">Payment</th>
                            <th className="px-4 py-5 font-medium">Status</th>
                            <th className="px-4 py-5 font-medium">Action</th>
                            <th className="px-4 py-5 font-medium">Details</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            applications?.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="font-semibold text-xl text-center py-4">
                                        No application found
                                    </td>
                                </tr>
                            )}
                        {applications.map((row, idx) => (
                            <tr key={idx} className="border-b text-left last:border-b-0 bg-white">
                                <td className="px-4 py-3">{row.firstName}</td>
                                <td className="px-4 py-3">{row.effectiveDate.split('T')[0]}</td>
                                <td className="px-4 py-3">{row.email}</td>
                                <td className="px-4 py-3">{row.address}</td>
                                <td className="px-4 py-3">$ {row.payment || '55'}</td>
                                <td className="px-4 py-3">
                                    <StatusBadge status={row.status} />
                                </td>
                                <td className="px-4 py-3">
                                    {/* <ActionSelect value={row.status} /> */}
                                    <select
                                        className="bg-[#232C54] text-white rounded px-2 py-1 focus:outline-none"
                                        onChange={(e)=>handleUpdateStatus(e.target.value,row.id)}
                                        defaultValue={row.status}
                                    >
                                        <option value={row.status} disabled hidden>{row.status}</option>
                                        <option>PENDING</option>
                                        <option>PROCESSING </option>
                                        <option>APPROVED </option>
                                        <option>REJECTED </option>
                                    </select>
                                </td>
                                <td className="px-4 py-3">
                                    <Link href={`/dashboard/application/${row.id}`}>
                                        <button className="p-2 rounded hover:bg-gray-100">
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="1.5" />
                                                <circle cx="19.5" cy="12" r="1.5" />
                                                <circle cx="4.5" cy="12" r="1.5" />
                                            </svg>
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Pagination */}
                <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-700">
                    <span>Showing 1{totalPage == 1 ? '' : - totalPage} of {totalData}</span>
                    <div className="flex items-center gap-1">
                        <button className="p-2 rounded hover:bg-gray-100"
                            onClick={() => setPageForPagination(currentPage - 1)}
                            disabled={currentPage == 1}>

                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        {[...Array(totalPage)].map((n, idx) => (
                            <button
                                key={idx}
                                onClick={() => setPageForPagination(idx + 1)}
                                className={`w-8 h-8 rounded ${n === 1 ? "bg-[#232C54] text-black" : "hover:bg-gray-100 text-black"}`}
                            >
                                {idx + 1}
                            </button>
                        ))}
                        <button className="p-2 rounded hover:bg-gray-100"
                            onClick={() => setPageForPagination(currentPage + 1)}
                            disabled={currentPage == totalPage}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationTable;
