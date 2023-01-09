import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';
import { Image } from '../_custom';
import imageUrl from '../../assets/interface-testing.png';
import AboutContent from './AboutContent';

const About = () => {
  return (
    <AboutWrapper id="about">
      <div className="max-container">
        <AboutContent />

        <Image
          url={imageUrl}
          minWidth="203px"
          maxWidth="508px"
          margin="60px 0px 0px"
        />
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  padding: 100px 0px;
  min-height: 100vh;
  display: flex;
  align-items: center;

  .max-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${mediaQuery.lg} {
    .max-container {
      flex-direction: row-reverse;
      justify-content: space-between;
      gap: 135px;
    }
  }
`;

export default About;
