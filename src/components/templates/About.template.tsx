import Container from "@/components/atoms/Container";
import Img from "@/components/atoms/Img";
import Typography from "@/components/atoms/Typography";
import Profile from "@/components/organisms/Profile";
import { PROFILE, SKILL } from "@/constants/about";

export default function AboutTemplate() {
  return (
    <Container.FlexRow className="h-screen">
      <div className="w-1/4 bg-purple1 relative ">
        <Img
          src="/src/assets/imgs/profile.png"
          className="bg-gray-50 absolute -right-20 top-1/4"
        />
      </div>
      <Container.Grid className="grid-cols-2 grid-rows-2 w-full py-32 px-32 ">
        {PROFILE.map((value) => (
          <Profile key={value.title} sections={[value]} />
        ))}
        <Container.FlexCol className="gap-4">
          <Container.FlexRow className="justify-between max-w-[560px]">
            <Typography.Head2>SKILL</Typography.Head2>
            <Typography.Span1 className="animate-bounce pt-2 text-[17px]">
              아이콘에 마우스를 올려주세요!
            </Typography.Span1>
          </Container.FlexRow>
          <Container.FlexRow className="gap-4 flex-wrap">
            {SKILL.map((value) => (
              <div className="relative group ">
                <div className="hidden absolute -left-3 -top-3 group-hover:block size-20 z-0 rounded-full bg-purple1 blur-sm transition-all duration-400"></div>
                <Img
                  className="size-14 z-10 relative"
                  src={`/src/assets/svg/${value.label}.svg`}
                />

                <div className="z-50 absolute top-20 left-1/2 transform min-w-[240px] -translate-x-1/2 hidden group-hover:block bg-gray60 p-4 rounded whitespace-pre-wrap text-center">
                  <Typography.P3>{value.tip}</Typography.P3>
                </div>
              </div>
            ))}
          </Container.FlexRow>
        </Container.FlexCol>
      </Container.Grid>
    </Container.FlexRow>
  );
}
