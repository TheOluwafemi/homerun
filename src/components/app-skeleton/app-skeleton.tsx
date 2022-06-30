import './app-skeleton.scss'
import SkeletonImage from '../../assets/images/app-skeleton.png'
import { Container } from '@chakra-ui/react'

export default function appskeleton() {
  return (
    <div className='skeleton'>
      <img className='skeleton__img' src={SkeletonImage} alt="image of app skeleton" width={1440} height={640} />
    </div>
  )
}