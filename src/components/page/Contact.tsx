import Container from "@/components/atoms/Container";
import Typography from "@/components/atoms/Typography";
import ContactTemplate from "@/components/templates/Contact.template";

export default function Contact() {
  return (
    <Container.FlexCol className="h-dvh justify-center relative">
      <ContactTemplate />
      <Container.FlexCol className="items-center bottom-5 p-6 absolute lg:bottom-3 left-0 right-0">
        <Typography.Span1>
          본 사이트는 상업적 용도가 아닌 개인 포트폴리오 용으로 제작 되었습니다.
        </Typography.Span1>
        <Typography.Span1>
          Copyright©coduit. All Rights Reserved.
        </Typography.Span1>
      </Container.FlexCol>
    </Container.FlexCol>
  );
}
