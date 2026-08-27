import Image from 'next/image'
import { MotionDiv } from '../components/MotionDiv'

const WhyChooseUs = () => {
  return (
    <section className="h-screen w-full">
      <h2
        className={`select-none text-6xl font-bold leading-none tracking-wider text-neutral-200 md:text-8xl`}
      >
        当社が選ばれる理由
      </h2>


      <MotionDiv className="h-64 w-96">
        <Image
          src="/Bridge.png"
          alt="A red lacquered bridge"
          priority
          sizes="100vw"
          width={1920}
          height={1080}
          className="object-cover object-[50%_20%]"
        />
      </MotionDiv>
    </section>
  )
}

export default WhyChooseUs