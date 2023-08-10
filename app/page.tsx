import About from "./components/About";
import Contact from "./components/Contact";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Overview from "./components/Overview";
import Works from "./components/Works";

export default function Home() {
  return (
    <div className="pt-20">
      <Container>
        <Overview />
      </Container>
      <hr className="text-border my-20" />
      <Container>
        <About />
      </Container>
      <hr className="text-border md:mt-20 md:mb-0 my-20" />
      <Works />
      <hr className="text-border md:mb-20 lg:mt-0 my-20" />
      <Container>
        <Contact />
      </Container>
      <hr className="text-border mt-20" />
      <Container>
        <Footer />
      </Container>
    </div>
  );
}
