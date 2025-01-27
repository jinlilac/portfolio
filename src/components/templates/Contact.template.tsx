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
            fontSize: "72px",
            fontWeight: 600,
            background:
              "linear-gradient(-154deg, #9759bb 20%, #fca6c6 60%, #f6af97 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          jinlilac24@gmail.com
        </Typography.Head2>
        <Container.FlexCol className="text-gray80 items-center mt-4">
          <Typography.P1>
            HTML, CSS, JavaScript, React를 비롯한 웹 개발의 기초를 탄탄히
            다졌습니다.
          </Typography.P1>
          <Typography.P1>
            앞으로도 현대적인 프레임워크 및 라이브러리를 활용하여 반응형 웹
            구축하는 능력을 발전시키고자 합니다.
          </Typography.P1>
        </Container.FlexCol>
      </Container.FlexCol>
    </>
  );
}
