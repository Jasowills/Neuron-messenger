import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='flex flex-col justify-end h-[50%]'>
			
			<div className='flex items-center justify-center'>
				{!loading ? (
					<>
						<BiLogOut className='w-6 h-6 text-white  cursor-pointer' onClick={logout} />
						<span className='text-white ml-2'>Logout</span>
					</>
				) : (
					<span className='loading loading-spinner'></span>
				)}
			</div>
		</div>
	);
};

export default LogoutButton;
