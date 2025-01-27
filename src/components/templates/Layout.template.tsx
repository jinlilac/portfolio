import Container from "@/components/atoms/Container";
import About from "@/components/page/About";
import Contact from "@/components/page/Contact";
import Main from "@/components/page/Main";
import Project from "@/components/page/Project";
import { FullPageScroll } from "@/components/templates/FullPage.template";
import { Outlet } from "react-router-dom";

export default function LayoutTemplate() {
  return (
    <Container.FlexCol>
      <FullPageScroll>
        <Main />
        <About />
        <Project />
        <Contact />
      </FullPageScroll>
    </Container.FlexCol>
  );
}
