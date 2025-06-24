import Typography from '@/components/Typography';
import ListItem from '@/components/ListItem';
import Button from '@/components/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-row desktop:px-[211px] mobile:px-[44px] w-full max-w-[1440px] mx-auto gap-8 mobile:flex-col mobile:items-center">
      {/* Left Content */}
      <section className="flex flex-col justify-center w-[516px] mobile:w-full z-10">
        <h1 className="font-urbanist font-bold text-[2.188rem] text-white mb-2 mobile:text-[25px] mobile:text-center mobile:text-gray">Want to Turn Social Media Into a Profitable Career?</h1>
        <h2 className="font-urbanist font-bold text-[2.188rem] text-[#00E7F9] mb-6 drop-shadow-pink mobile:text-[25px] mobile:text-center" style={{textShadow: '0px 4px 4px #FC004E'}}>
          Discover your way to success with Fametonic:
        </h2>
        <ul className="mb-8 mobile:mb-6">
          <ListItem text="Start growing your influence right away—no waiting required!" />
          <ListItem text="Create viral TikToks and Reels step by step with easy-to-follow lessons" />
          <ListItem text="Use a Personal AI Worker to boost your content" />
          <ListItem text="Learn from expert-led courses designed for aspiring influencers" />
        </ul>
        <div className="flex flex-col items-start mobile:items-center py-[30px] gap-1">
          <Button className="mobile:hidden">GET STARTED &gt;</Button>
          <Button className="hidden mobile:flex w-[350px]">GET STARTED &gt;</Button>
          <span className="font-figtree font-normal text-[12px] leading-4 text-white text-center">1-minute quiz for personalized Insights</span>
        </div>
        <Typography variant="small" color="lightgray" className="mb-2 text-left mobile:text-center">By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</Typography>
        <Typography variant="small" color="white" className="text-left mobile:text-center">Fametonic 2025 ©All Rights Reserved.</Typography>
      </section>
      {/* Right Image (Desktop) / Top Image (Mobile) */}
      <section className="flex-1 flex justify-center items-center relative mobile:order-first mobile:mb-6">
        <Image
          src="/Influe_mobile_mockup.png"
          alt="Fametonic App Mockup"
          width={390}
          height={426}
          className="mobile:mx-auto mobile:w-[390px] mobile:h-[426px]"
          priority
        />
      </section>
    </main>
  );
}
