import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Img from "@/components/atoms/Img";
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
      <Typography.P2 className="whitespace-nowrap text-P3 lg:text-P2">
        {label}
      </Typography.P2>
      <Typography.P1 className="whitespace-pre-line text-P2 lg:text-P1">
        {displayText}
      </Typography.P1>
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
      <Container.FlexCol className="h-full w-full lg:justify-center">
        <Typography.Head2 className="text-P1 font-bold lg:text-Head2 lg:mb-5 text-center lg:text-start">{`${order} ${title}`}</Typography.Head2>
        <Container.Mobile className="gap-2 md:gap-12 lg:h-full lg:max-h-[520px] lg:justify-center">
          <Img
            className="h-[320px] md:h-[330px] w-full lg:w-2/4 lg:h-full"
            src={img_url}
          />
          <Container.FlexCol className="flex-1 gap-2 md:gap-8 lg:max-h-[620px]">
            <Container.FlexCol className="gap-1 lg:gap-2">
              <Typography.Head3 className="text-P1 font-bold lg:text-Head3">
                {name}
              </Typography.Head3>
              <LabelText label="프로젝트 범위:" text={range} />
              <LabelText label="프로젝트 기여도:" text={contribution} />
              <LabelText label="제작기간:" text={term} />
              <LabelText label="Tool:" text={tool} />
            </Container.FlexCol>
            <Container.FlexCol className="lg:gap-2">
              <Typography.SubTitle1 className="text-P1 font-bold lg:text-Head3">
                OVERVIEW:
              </Typography.SubTitle1>
              <Typography.P1 className="whitespace-pre-wrap text-P2 lg:text-P1">
                {description}
              </Typography.P1>
            </Container.FlexCol>

            <Container.FlexRow className="gap-4">
              {site && (
                <Button.Fill onClick={() => window.open(site)}>
                  사이트 보기
                </Button.Fill>
              )}
              <Button.Fill onClick={() => window.open(git)} disabled={!git}>
                코드 리뷰
              </Button.Fill>
              {figma && (
                <Button.Fill onClick={() => window.open(figma, "_blank")}>
                  와이어프레임
                </Button.Fill>
              )}
            </Container.FlexRow>
          </Container.FlexCol>
        </Container.Mobile>
      </Container.FlexCol>
    )
  );
}
