import Container from "@/components/atoms/Container";
import Img from "@/components/atoms/Img";
import Typography from "@/components/atoms/Typography";
import Profile from "@/components/organisms/Profile";
import { PROFILE, SKILL } from "@/constants/about";

export default function AboutTemplate() {
  return (
    <Container.Mobile className="h-dvh">
      <div className="w-full lg:w-1/4 bg-transparent lg:bg-purple1 relative">
        <Img
          src="/src/assets/imgs/profile.png"
          className="bg-gray-50 lg:absolute lg:-right-20 lg:top-1/4 w-full h-[120px] md:h-[160px] lg:h-fit"
          imageStyle="object-contain"
        />
      </div>
      <Container.Grid className="grid-cols-1 p-7 gap-3 md:grid-cols-2 md:grid-rows-2 w-full lg:p-32">
        {PROFILE.map((value) => (
          <Profile key={value.title} sections={[value]} />
        ))}
        <Container.FlexCol className="gap-4 lg:row-start-auto lg:col-start-auto md:row-start-3 md:col-start-1 md:col-end-3">
          <Container.FlexRow className="justify-between lg:max-w-[560px]">
            <Typography.Head2 className="text-P1 font-bold lg:text-Head2">
              SKILL
            </Typography.Head2>
            <Typography.P2 className="animate-bounce pt-2">
              아이콘에 마우스를 올려주세요!
            </Typography.P2>
          </Container.FlexRow>
          <Container.FlexRow className="gap-4 flex-wrap relative">
            {SKILL.map((value) => (
              <div className="lg:relative group">
                <div className="hidden absolute -left-2 -top-2 lg:-left-3 lg:-top-3 group-hover:block size-16 lg:size-20 z-0 rounded-full lg:bg-purple1 blur-sm transition-all duration-400"></div>
                <Img
                  className="size-12 lg:size-14 z-10 lg:relative"
                  src={`/src/assets/svg/${value.label}.svg`}
                />

                <div className="z-50 absolute -top-24 inset-x-0 md:top-20 lg:left-1/2 transform min-w-[240px] lg:-translate-x-1/2 hidden group-hover:block bg-gray60 p-4 rounded whitespace-pre-wrap text-center">
                  <Typography.P3>{value.tip}</Typography.P3>
                </div>
              </div>
            ))}
          </Container.FlexRow>
        </Container.FlexCol>
      </Container.Grid>
    </Container.Mobile>
  );
}
