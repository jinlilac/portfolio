import Container from "@/components/atoms/Container";
import Typography from "@/components/atoms/Typography";

export default function Profile({
  sections,
}: {
  sections: { title: string; content: { label: string; text: string }[] }[]; // sections 배열
}) {
  return (
    <Container.FlexCol>
      {sections.map((section) => (
        <Container.FlexCol key={section.title} className="gap-1 lg:gap-4">
          <Typography.Head2 className="text-P1 font-bold lg:text-Head2">
            {section.title}
          </Typography.Head2>
          {section.content.map((value, index) => {
            // 조건에 따라 스타일을 변경
            const isEducationSection = section.title === "EDUCATION";

            return isEducationSection ? (
              <Container.FlexCol
                key={`${value.label}_${index}`}
                className="gap-2"
              >
                <Typography.P2 className="text-P3 lg:text-P2">
                  {value.label}
                </Typography.P2>
                <Typography.P1 className="text-P2 lg:text-P1">
                  {value.text}
                </Typography.P1>
              </Container.FlexCol>
            ) : (
              <Container.FlexRow
                key={value.label}
                className="gap-4 items-center whitespace-pre-wrap"
              >
                <Typography.P2 className="whitespace-nowrap max-w-[60px] text-P3 lg:text-P2">
                  {value.label}
                </Typography.P2>
                <Typography.P2 className="text-P2 lg:text-P1">
                  {value.text}
                </Typography.P2>
              </Container.FlexRow>
            );
          })}
        </Container.FlexCol>
      ))}
    </Container.FlexCol>
  );
}
