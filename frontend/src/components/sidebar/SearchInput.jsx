import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();
    const [filteredConversations, setFilteredConversations] = useState([]);

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);
        const filtered = conversations.filter((c) =>
            c.fullName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredConversations(filtered);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        const conversation = filteredConversations.find((c) =>
            c.fullName.toLowerCase().includes(search.toLowerCase())
        );
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else toast.error("No such user found!");
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
                type="text"
                placeholder="Search…"
                className="input input-bordered rounded-full bg-[#323437] text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-4"
                value={search}
                onChange={handleInputChange}
            />
            <button
                type="submit"
                className="btn btn-circle bg-[#0E8388] text-white text-sm sm:text-base p-2 sm:p-3"
            >
                <IoSearchSharp className="w-6 h-6 outline-none" />
            </button>
        </form>
    );
};

export default SearchInput;
