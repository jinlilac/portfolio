import Container from "@/components/atoms/Container";
import Typography from "@/components/atoms/Typography";

export default function MainTemplate() {
  return (
    <Container.FlexCol className="h-dvh relative">
      <div className="bg-main w-full h-full bg-cover inset-0 bg-center animate-bg" />
      <div className="absolute inset-0 h-full inset-y-0 text-center text-white animate-fadeScale">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <h1
            style={{
              WebkitTextStroke: "3px #D797EE",
            }}
            className="text-[6rem] lg:text-[8rem]"
          >
            PORTFOLIO
          </h1>
          <Typography.P1 className="text-purple1">
            끊임없이 노력하고 성장해나가는 김수현입니다.
          </Typography.P1>
        </div>
      </div>
    </Container.FlexCol>
  );
}
