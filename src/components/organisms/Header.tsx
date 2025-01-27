import Container from "@/components/atoms/Container";
import Typography from "@/components/atoms/Typography";
import { Link } from "react-router-dom";

type HeaderProps = {
  sections: string[]; // HEADER 배열
  currentIndex: number; // 현재 포커스된 섹션
  onClick: (index: number) => void; // 클릭 핸들러
};

export const Header: React.FC<HeaderProps> = ({
  sections,
  currentIndex,
  onClick,
}) => {
  return (
    <Container.FlexRow className="gap-4 fixed left-0 top-5 justify-end z-10 w-full pr-28">
      {sections.map((section, index) => (
        <div
          key={section}
          onClick={() => onClick(index)}
          className={`${
            currentIndex === index ? " text-purple2" : "text-gray-50 "
          }`}
        >
          <Typography.Head3
            className="font-bold cursor-pointer"
            style={{ textShadow: "0px 2px 3px rgba(0,0,0,0.3)" }}
          >
            {section}
          </Typography.Head3>
        </div>
      ))}
    </Container.FlexRow>
  );
};
