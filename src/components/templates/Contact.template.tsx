import Container from "@/components/atoms/Container";
import Typography from "@/components/atoms/Typography";

export default function ContactTemplate() {
  return (
    <>
      <Container.FlexCol className="justify-center items-center">
        <Typography.P1>
          새로운 트렌드와 기술을 익히며 성장할 것입니다.
        </Typography.P1>
        <Typography.Head2
          style={{
            fontWeight: 700,
            background:
              "linear-gradient(-154deg, #9759bb 20%, #fca6c6 60%, #f6af97 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-[2.5rem] md:text-[56px] lg:text-[72px] "
        >
          jinlilac24@gmail.com
        </Typography.Head2>
        <Container.FlexCol className="text-gray80 items-center text-center text-Span2 lg:text-P2 p-8">
          <Typography.P1>
            HTML, CSS, JavaScript, React를 비롯한 웹 개발의 기초를 탄탄히
            다졌습니다.
          </Typography.P1>
          <Typography.P1>
            앞으로는 컴퓨터 공학적인 지식과 웹 통신 기능에 대한 깊은 통찰력을
            쌓아가고 있으며,
          </Typography.P1>
          <Typography.P1>
            이를 바탕으로, 동작 원리를 이해하고 구현할 수 있는 개발자로
            성장하고자 합니다.
          </Typography.P1>
        </Container.FlexCol>
      </Container.FlexCol>
    </>
  );
}
