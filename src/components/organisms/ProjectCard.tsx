import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Typography from "@/components/atoms/Typography";
import { ProjectType } from "@/types/project";

const LabelText = ({
  label,
  text,
}: {
  label: string;
  text: string | string[] | undefined;
}) => {
  const displayText = Array.isArray(text) ? text.join(", ") : text;
  return text === undefined ? null : (
    <Container.FlexRow className="gap-2">
      <Typography.P2>{label}</Typography.P2>
      <Typography.P1>{displayText}</Typography.P1>
    </Container.FlexRow>
  );
};

export default function ProjectCard(props: ProjectType) {
  const {
    title,
    project_name: name,
    contribution,
    project_range: range,
    project_term: term,
    tool,
    project_description: description,
    site_link: site,
    git_link: git,
    figma_link: figma,
    img_url,
    show,
    order,
  } = props;

  return (
    show && (
      <Container.FlexCol className="h-full w-full justify-center">
        <Typography.Head2 className="mb-5">{`${order} ${title}`}</Typography.Head2>
        <Container.FlexRow className="gap-14 h-full max-h-[620px] justify-center">
          <iframe src={img_url} className="flex-1" />
          <Container.FlexCol className="flex-1 gap-8 ">
            <Container.FlexCol className="gap-2">
              <Typography.Head3>{name}</Typography.Head3>
              <LabelText label="프로젝트 범위:" text={range} />
              <LabelText label="프로젝트 기여도:" text={contribution} />
              <LabelText label="제작기간:" text={term} />
              <LabelText label="Tool:" text={tool} />
            </Container.FlexCol>
            <Container.FlexCol className="gap-2">
              <Typography.SubTitle1>OVERVIEW:</Typography.SubTitle1>
              <Typography.P1 className="whitespace-pre-wrap">
                {description}
              </Typography.P1>
            </Container.FlexCol>

            <Container.FlexRow className="gap-4">
              <Button.Fill onClick={() => window.open(site)}>
                사이트 보기
              </Button.Fill>
              <Button.Fill onClick={() => window.open(git)} disabled={!git}>
                코드보기
              </Button.Fill>
              {figma && (
                <Button.Fill onClick={() => window.open(figma, "_blank")}>
                  와이어프레임
                </Button.Fill>
              )}
            </Container.FlexRow>
          </Container.FlexCol>
        </Container.FlexRow>
      </Container.FlexCol>
    )
  );
}
