import { HiOutlineCog, HiOutlineDocumentText } from "react-icons/hi";

export const SIDEBAR_TOP_LINKS = [
	{
		key: 'light',
		label: 'Light Controls',
		path: '/lightcontrols',
		icon: <HiOutlineLightBulb />
	},
	{
		key: 'temperature',
		label: 'Temperature Controls',
		path: '/temperatures',
		icon: <HiOutlineFire />
	},
	{
		key: 'sensor',
		label: 'Sensor Controls',
		path: '/sensorcontrol',
		icon: <HiOutlineAdjustments />
	}
]

export const SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineDocumentText />
	}
]