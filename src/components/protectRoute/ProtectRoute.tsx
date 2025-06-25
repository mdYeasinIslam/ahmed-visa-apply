import { useAppSelector } from '@/redux/hooks/hooks'
import { redirect } from 'next/navigation'
import  { ReactNode } from 'react'

const ProtectRoute = ({ children }: { children: ReactNode }) => {
    const user =useAppSelector(state =>state.auth.user)
    console.log(user)
    // const router = useRouter()
    if(!user){
        return redirect('/login')
    }

  return children
}

export default ProtectRoute
