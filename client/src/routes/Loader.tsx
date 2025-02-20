import { HashLoader } from 'react-spinners'

export default function Loader() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <HashLoader color='#ea580c' size={120} />
    </div>
  )
}
